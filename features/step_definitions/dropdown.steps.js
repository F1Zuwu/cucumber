const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// --- Rippmenüü sammud ---

Given('ma avan rippmenüü lehe', async function () {
  await this.page.goto(`${this.baseUrl}/dropdown`);
  await this.page.waitForSelector('#dropdown');
});

When('ma valin rippmenüüst {string}', async function (optionText) {
  await this.page.select('#dropdown', optionText === 'Option 1' ? '1' : '2');
});

Then('rippmenüü valitud väärtus on {string}', async function (expectedValue) {
  const selectedValue = await this.page.$eval('#dropdown', el => el.value);
  assert.strictEqual(
    selectedValue,
    expectedValue,
    `Oodati väärtust "${expectedValue}", aga saadi: "${selectedValue}"`
  );
});
