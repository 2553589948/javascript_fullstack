export default class BaseClass {
  constructor() {
    
  }
  async locationSearch(keyword) {
    return ({
      city: '南昌',
      area: [
        '东华理工',
        '东莞',
        '东华理工抚州校区'
      ]
    })
  }
  async fetch(url='', data = {}, type = 'GET', resType = 'JSON') {
      
  }
}
