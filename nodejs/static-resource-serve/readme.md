# 静态资源
不会随着服务运行而改变的东西
html css js jpg

请求的url和文件在磁盘上的路径一一对应起来
:8888/logo.png -> 没找到返回404
:8888/js/home.js -> read -> res

nginx存取静态资源的服务器

浏览器双击打开html文件的时候协议变了,http协议变成了file协议(文件查找)