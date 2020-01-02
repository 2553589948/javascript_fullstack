let xhr = new XMLHttpRequest()

// 初始化
xhr.open(method, url, async)
// 发送请求
xhr.send(data)
// 设置状态变化回调处理请求结果
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}


function myajax(options) {
  const url = options.url
  const method = options.method.toLocaleLowerCase() || 'get'
  const async = options.async
  const data = options.data

  // 实例化
  const xhr = new XMLHttpRequest()
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }

  // 返回一个promise实例
  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    // 监听状态变化回调
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 200~300之间的状态码表示请求成功
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }

    // 错误回调
    xhr.onerror = err => reject && reject(err)

    // 处理请求参数
    let paramArr = []
    let encodeData
    if (data instanceof Object) {
      for (let key in data) {
        // 参数参数拼接需要通过encodeURLComponent进行编码
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }

    // get请求拼接参数
    if (method === 'get') {
      // 检测url中是否有问号及其位置
      const index = url.indexOf('?')
      if (index === -1) {
        url += '?'
      } else if (index != url.length - 1) {
        url += '&'
      }
      url += encodeData
    }

    xhr.open(method, url, async)
    if (method === 'get') xhr.send(null)
    else {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTR-8')
      xhr.send(encodeData)
    }
  })
}