--浏览器收到html 会解析为 DOM
遇到css解析为cssom
把dom和cssom合在一起生成一棵渲染树
根据样式计算位置开始渲染布局

domContentloaded就是当html解析完之后发生的

有一些标签 img link script会引入外部资源，会在解析完html后，开始请求资源