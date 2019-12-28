let url = require('url')
let request = {
  get url() { // 使用get就可以用方法名调用函数不需要()
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
  // ...
}

module.exports = request