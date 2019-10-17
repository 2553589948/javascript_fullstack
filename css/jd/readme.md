1.基本的结构套路 #app>page
*号 css解析也是要花时间的  *号比较费时
2.浏览器
-webkit 谷歌浏览器内核  手机端大部分以-webkit为主
-ms PC端,微软内核 windows操作系统
text-size-adjust: 100%;  以加前缀方式兼容所有浏览器
3.自适应(rem,em)  px(像素单位)不牢靠
weui用em
100px 京东用这个
16px = .16rem
4.css考点
-webkit-text-size-adjust: 100%;
-webkit-tap-highlight-color: transparent;
-webkit-overflow-scrolling: touch;
html font-size  100px
5.oo css
.quick-login .quick-type  stylus嵌套   模块化命名空间
6.base64格式图片
大小更小 (任何一张图片都是编码)
传输更快，完全在css中，不需要发送http请求，从而性能开销小