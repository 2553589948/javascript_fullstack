浏览器渲染过程
document.body.style.backgroundColor = 'red';
setTimeout(() => {
 document.body.style.backgroundColor = 'blue';
}, 0);
先看到red后看到blue
说明在setTimeout之前会发生一次样式计算并且浏览器渲染它