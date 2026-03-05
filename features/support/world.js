const { setWorldConstructor, World } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    this.baseUrl = 'https://the-internet.herokuapp.com';
    this.browser = null;
    this.page = null;
  }

  async openBrowser() {
    this.browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: 1280, height: 720 });
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
