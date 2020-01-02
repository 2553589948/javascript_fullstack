import BaseClass from '../../prototype/baseClass'
class Cities extends BaseClass {
  constructor() {
    super() // 把父类的构造函数执行
    this.suggestion = this.suggestion.bind(this)
  }
  async suggestion(req, res, err) {
    let { keyword } = req.query
    if (!keyword) {
      // 参数校验
      res.send({
        status: -1,
        message: '参数错误'
      })
      return
    }
    try {
      // console.log(this.locationSearch)
      // 数据库操作 网络处理
      let data = await this.locationSearch(keyword)
      res.send({
        status: 200,
        message: '获取位置信息成功',
        data
      })
    } catch (error) {
      res.send({
        status: -1,
        message: '获取位置信息失败'
      })
    }
    // res.send({
    //   status: 200,
    //   message: keyword
    // })
  }
}

export default new Cities()