import { test, expect } from '@playwright/test';
import { Header } from '../pages/header.js';
import { MainPage } from '../pages/Mainpage.js';

test('Header functionality works correctly', async ({ page }) => {
  const mainPage = new MainPage(page);
  const header = new Header(page);
  await mainPage.goto();
  await page.pause();
 

  await header.clickLogo();
//   await header.hamburgerClick();
  // await header.clickBookConsultation();
});