//无头浏览器 软件自动化测试工具
// npm i puppeteer -s
// node puppeteer.js
const puppeteer = require('puppeteer')
async function run() {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()
    // 0 代表没有网络请求
    await page.goto('https://juejin.im/books', {
        waitUntil: 'networkidle0'
    })
    await page.screenshot({
        path: './books.png'
    })
}
run()