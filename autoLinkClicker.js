const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://Your_link.com');

  for (let i = 0; i < 20; i++) {
    const link = await page.$('a'); // Get the first link element on the page
    await link.click(); // Click on the link
    await page.waitForNavigation({ timeout: 60000 }); // Set timeout to 60 seconds
  }

  await browser.close();
})();
