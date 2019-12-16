import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios配置
axios.defaults.timeout = 10000 //请求时长,超时切断
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.withCredentials = true

// 判断返回状态,响应拦截
axios.interceptors.response.use((res) => {
  if ((res.data.code && res.data.code !== 200) || (res.data.ok && res.data.ok !== true)) {
    alert('网络异常') // 请求回来的数据异常
    return Promise.reject(res)
  }
  return res
}, (error) => {
  alert('网络异常!!') // 请求发不出去
  return Promise.reject(error)
})

export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  // 获取排行榜类型
  getRankingType (params) {
    return fetchGet('/novelapi/ranking/gender', params)
  },

  // 获取排行榜小说
  getRankingBook (params, id) {
    return fetchGet('/novelapi/ranking/' + id, params)
  },

  // 获取小说所有分类
  getNovelCate (params) {
    return fetchGet('/novelapi/cats/lv2/statistics', params)
  },

  // 按分类获取小说列表
  getBookList (params) {
    return fetchGet('/novelapi/book/by-categories', params)
  },

  // 获取新闻
  neteasyNews (params) {
    return fetchGet('/api/getWangYiNews', params)
  }
}