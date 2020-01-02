# 访问记录
1. url
2. MPA：整个页面刷新,发送请求(html请求)到后端,记录下来
3. SPA：hashRouter / historyrouter 局部刷新
historyrouter的方法：1.push/back go(1)/go(-1) 2.pushState / replaceState
mounted() {
  访问记录++  // 已侵入业务代码
}
无痕埋点,不侵入业务代码：只要引入监控的js,就可以自动监控

单页应用怎么监控页面的改变
# http请求
1. ajax请求
/src/request.js 封装wx.request() axios
(1).借助axios
(2). ???
# js错误

# 资源错误