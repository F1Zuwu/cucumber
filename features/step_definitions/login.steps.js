const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// --- Sisselogimise sammud ---

Given('ma avan sisselogimise lehe', async function () {
  await this.page.goto(`${this.baseUrl}/login`);
  await this.page.waitForSelector('#login');
});

When('ma sisestan kasutajanime {string} ja parooli {string}', async function (username, password) {
  await this.page.type('#username', username);
  await this.page.type('#password', password);
});

When('ma vajutan sisselogimise nuppu', async function () {
  await Promise.all([
    this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 15000 }),
    this.page.click('button[type="submit"]'),
  ]);
  await this.page.waitForSelector('#flash', { timeout: 5000 });
});

Then('ma näen eduka sisselogimise teadet', async function () {
  const flashText = await this.page.$eval('#flash', el => el.textContent.trim());
  assert.ok(
    flashText.includes('You logged into a secure area!'),
    `Oodati eduka sisselogimise teadet, aga saadi: "${flashText}"`
  );
});

Then('leht sisaldab {string} pealkirja', async function (expectedTitle) {
  const heading = await this.page.$eval('h2', el => el.textContent.trim());
  assert.ok(
    heading.includes(expectedTitle),
    `Oodati pealkirja "${expectedTitle}", aga saadi: "${heading}"`
  );
});

Then('ma näen veateadet sisselogimise ebaõnnestumise kohta', async function () {
  const flashText = await this.page.$eval('#flash', el => el.textContent.trim());
  assert.ok(
    flashText.includes('Your username is invalid!') || flashText.includes('Your password is invalid!'),
    `Oodati veateadet, aga saadi: "${flashText}"`
  );
});
