export class MainPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://cnc-mart.com/', { waitUntil: 'load', timeout: 60000 });
  }
}
