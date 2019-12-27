# localStorage
永久性

# sessionStorage
当前这次会话

# cookie
domain: cookie生效的域 其下所有的子域都可以拿到
1. path:路径
/
/mobile
domain + path: 共同构成cookie生效的范围

2. expires/max-age: cookie生效的时间

3. httpOnly: cookie的来源：服务端 前端的js
httpOnly如果为true,cookie不可以被js操作的(为了安全考虑)

4. secure: 只在https环境下传输cookie