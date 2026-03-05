const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// --- Märkeruutude sammud ---

Given('ma avan märkeruutude lehe', async function () {
  await this.page.goto(`${this.baseUrl}/checkboxes`);
  await this.page.waitForSelector('#checkboxes');
});

Then('leht sisaldab kahte märkeruutu', async function () {
  const checkboxes = await this.page.$$('#checkboxes input[type="checkbox"]');
  assert.strictEqual(
    checkboxes.length,
    2,
    `Oodati 2 märkeruutu, aga leiti ${checkboxes.length}`
  );
});

When('ma klõpsan esimesel märkeruudul', async function () {
  const checkboxes = await this.page.$$('#checkboxes input[type="checkbox"]');
  await checkboxes[0].click();
});

Then('esimene märkeruut on märgitud', async function () {
  const isChecked = await this.page.$eval(
    '#checkboxes input:nth-child(1)',
    el => el.checked
  );
  assert.strictEqual(isChecked, true, 'Esimene märkeruut peaks olema märgitud');
});

When('ma klõpsan teisel märkeruudul', async function () {
  const checkboxes = await this.page.$$('#checkboxes input[type="checkbox"]');
  await checkboxes[1].click();
});

Then('teine märkeruut ei ole märgitud', async function () {
  const isChecked = await this.page.$eval(
    '#checkboxes input:nth-child(3)',
    el => el.checked
  );
  assert.strictEqual(isChecked, false, 'Teine märkeruut ei peaks olema märgitud');
});
