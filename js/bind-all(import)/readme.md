# call apply bind
都可以绑定this

call/apply: 调用函数传参方式不一样
示例：
function foo(a, b) {}
foo()
foo.call(this, a, b)
foo.apply(this, [a, b])

bind:
柯里化(curry)