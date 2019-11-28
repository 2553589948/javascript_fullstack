# 应用层
http webSocket

http1.1: client ->> server

webSocket: client <<->> server 全双工双向通信

http2.0: 支持服务端推送

# 连接
1.发送一个http请求
  后端响应101switching protocols
  Connection: Upgrade需要一个http协议辅助以升级为webSocket后续的发送接收信息都会走这个
  全双工双向通道