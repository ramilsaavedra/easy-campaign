const puppeteer = require('puppeteer');
const sessionFactory = require('./factories/sessionFactory');
const userFactory = require('./factories/userFactory');

let browser, page, url;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
});

afterEach(async () => {
  await browser.close();
});

test('Navigating to google sign in', async () => {
  await page.click('#loginButton');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  url = await page.url();
  expect(url).toEqual('http://localhost:3000/login');
  await page.click('#googleSignIn');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  url = await page.url();
  expect(url).toMatch(/accounts\.google\.com/);
}, 6000);

test.only('When signed in, stay on dashboard', async () => {
  const user = await userFactory();
  const { session, sig } = sessionFactory(user);
  await page.setCookie({
    name: 'session',
    value: session,
  });

  await page.setCookie({
    name: 'session.sig',
    value: sig,
  });

  await page.goto('http://localhost:3000/dashboard');
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  url = await page.url();
  expect(url).toEqual('http://localhost:3000/dashboard');
});
