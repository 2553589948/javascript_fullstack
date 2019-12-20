const puppeteer = require('puppeteer')
const nodeSchedule = require('node-schedule')
const $ = require('cheerio')

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await page.goto('https://juejin.im/books', {
    waitUntil: 'networkidle0'
  })
  const html = await page.content()
  const books = $('.info', html)
  let totalSold = 0
  let totalSale = 0
  books.each(function() {
    const book = $(this)
    const price = $(book.find('.price-text')).text().replace('￥', '')
    const count = $(book.find('.message')).last().find('span').text().replace('人已购买', '')
    totalSale += Number(price) * Number(count)
    totalSold += Number(count)
  })
  console.log(`${totalSold}人, ${totalSale}元`)
}

run()
// Promise.all 等所有的promise任务执行完成 => 返回一个promise
// 定时任务
// const date = new Date(2019, 11, 20, 21, 10, 0)
// const job = nodeSchedule.scheduleJob(date, () => {
//   run()
// })

const rule = new nodeSchedule.RecurrenceRule()
rule.dayOfWeek = [0, 1, 2, 3, 4, 5, 6] // 每天调度一次
rule.hour = 21
rule.minute = 16
const job = nodeSchedule.scheduleJob(rule, () => {
  run()
})