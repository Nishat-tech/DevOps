export class MainPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
     //Check Hero section
    // this.heroSection = page.locator('.home-banner');
    // //submit a custom inquiry button
    // this.submitCustomInquiryBtn = page.locator('a:has-text("Submit a Custom Inquiry")');
    // // check if the span text is visible and clickable
    // this.linkText = page.getByRole('button').filter({ hasText: 'For Sale' });
    // // Explore More Vans button
    // this.exploremorebtn = page.locator ('a:has-text("Explore More")' );
    // //Learn More button
    // this.learnmorebtn = page.getByText('Learn More').last(); 
    // //Reach Out Now button
    // this.reachoutnowbtn= page.getByText('Reach Out Now');
  }
    
// Navigate to the main page
  async goto() {
  await this.page.goto('https://cnc-mart.com/', { waitUntil: 'load', timeout: 60000 });
}
  
}