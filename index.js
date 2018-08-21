const puppeteer = require('puppeteer');
const CREDS = require('./creds');

async function run() {
	// DOM element selectors
	const USERNAME_SELECTOR = '#login_field';
	const PASSWORD_SELECTOR = '#password';
	const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';

	const browser = await puppeteer.launch({
		headless: false
	});
	const page = await browser.newPage();

	// THIS WILL TAKE A SCREENSHOT
	//await page.goto('https://github.com/login');
	//await page.screenshot({ path: 'screenshots/github.png' });

	// THIS WILL LOG YOU IN
	await page.click(USERNAME_SELECTOR);
	await page.keyboard.type(CREDS.username);

	await page.click(PASSWORD_SELECTOR);
	await page.keyboard.type(CREDS.password);

	await page.click(BUTTON_SELECTOR);

	await page.waitForNavigation();

	browser.close();
}

run();



