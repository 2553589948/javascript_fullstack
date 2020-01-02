// 封装大致思想
import axios from 'axios'
import {request} from 'http'

const axiosIns = axios.createInstance({
  baseUrl: 'http://localhost:3000',
  response: (res) => {
    if (res.code === 200) {
      return res
    } else {
      alert('出错了')
    }
  }
})

export default axiosIns

request('/suggest')
.then(res => {
  if (res.code === 200) {

  }
})