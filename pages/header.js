import { expect } from '@playwright/test';

export class Header {
  constructor(page) {
    this.page = page;
    this.logoLink = page.locator('img[alt="CNC Logo"]');
    this.logo = page.locator('text="CNC Mart"');
  }

  async goto() {
    await this.page.goto('https://www.cnc-mart.com/');
  }

  async clickLogo() {
    await expect(this.logoLink).toBeVisible();
    //timeout
    
    await this.logoLink.click();
    await this.page.waitForTimeout(5000);
    await expect(this.logo).toBeVisible();
    await expect(this.logo).toHaveText('CNC Mart');
    await expect(this.page).toHaveURL(/https:\/\/cnc-mart.com\/?#?/);
  }
}
