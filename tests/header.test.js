const puppeteer = require('puppeteer');

let browser, page, url;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
});

afterEach(async () => {
  await browser.close();
});

test('Navigating to google sign in', async () => {
  await page.click('#loginButton');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  url = await page.url();
  expect(url).toEqual('http://localhost:3000/login');

  await page.click('#googleSignIn');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  url = await page.url();
  expect(url).toMatch(/accounts\.google\.com/);
});
