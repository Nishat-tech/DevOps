import { expect } from '@playwright/test';
export class Header {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    
    this.page = page;
    //Define locators for elements on the logo and book consultation button
    //hea
    // this.header = page.locator('.elementskit-menu-header').first();
     //logo link
    this.logoLink = page.locator('img[alt="CNC Logo"]');
    this.logo = page.locator('text="CNC Mart"');
    // Hamburger menu
    // this.hamburger = page.locator('.elementskit-menu-hamburger').first();
    // // Header Menu link
    // this.headerMenuLinks = page.locator('.ekit-menu-nav-link');
    // //book consultation button
    //  this.bookConsultationBtn = page.locator('a:has-text("Book a Consult")');
  }
  // async hamburgerClick() {
  //   // Click the hamburger menu if it is visible
  //   // if (await this.hamburger.isVisible()) {
  //   //   await this.hamburger.click();
  //   //   await this.page.waitForSelector('#menu-header .ekit-menu-nav-link', { state: 'visible', timeout: 5000 });
  //   // }

  //   // Ensure the header menu links are visible
  //   const count = await this.headerMenuLinks.count();
  //   for (let i = 0; i < count; i++) {  
  //     const link = this.headerMenuLinks.nth(i);
  //     await expect(link).toBeVisible();
  //     // Remove target="_blank" so link opens in same tab
  //     await link.evaluate(node => node.removeAttribute('target'));
  //     await link.click();
  //     const url = await this.page.url();
  //     console.log(`Navigated to: ${url}`);
  //     await this.page.goBack();        
  //     // If not on homepage, reload homepage
  //     const currentUrl = await this.page.url();    
  //     if (currentUrl !== 'https://www.cnc-mart.com/' && currentUrl !== 'https://www.cnc-mart.com/#') {
  //       await this.page.goto('https://www.cnc-mart.com/');
  //     }    
  //     await expect(this.page).toHaveURL(/https:\/\/www.cnc-mart.com\/?#?/); 
  //   }
  // }
  async goto() {
    await this.page.goto('https://www.cnc-mart.com/');
  }
  // Click the logo link
  async clickLogo() {   
    await expect(this.logoLink).toBeVisible();
    await this.logoLink.click();
    await expect(this.page).toHaveURL('https://cnc-mart.com/');
    await expect(this.logo).toBeVisible();
    await expect(this.logo).toHaveText('CNC Mart');
    await expect(this.page).toHaveURL(/https:\/\/cnc-mart.com\/?#?/);
  }
  // Click the Book Consultation button
  // async clickBookConsultation() {
  //   await expect(this.bookConsultationBtn).toBeVisible();
  //   await this.bookConsultationBtn.click();
  //   await expect(this.page).toHaveURL("https://calendly.com/info-bigbearvans/custom-build-your-campervan?back=1&month=2025-01");
  // }
  
  
  

}