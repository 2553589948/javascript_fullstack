console.log('begin')
const CACHE_NAME = 'PWA-1.0'
const cacheList = [ // 需要缓存的列表
  './Servicework.png',
  './bundle.js'
]

// cacheStorage
this.addEventListener('install', (e) => {
  // install -> activate安装到激活 等下面任务(添加缓存成功)完成后再激活
  e.waitUntil(
    // caches相当于 localStorage sessionStorage
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(cacheList)
    })
  )
})
// 监听请求
this.addEventListener('fetch', (e) => {
  e.respondWith(
    // 如果缓存里面有 match匹配
    caches.match(e.request)
    .then(res => {
      if(res) {
        console.log(e.request.url, '有缓存')
        return res
      } else {
        console.log(e.request.url, '没有缓存')
        return fetch(e.request)
        .then(resp => {
          // 拿到没有缓存的请求结果 再次添加到缓存
          return caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(e.request, resp) // 以键值对添加
            return resp
          })
        })
      }
    })
  )
})