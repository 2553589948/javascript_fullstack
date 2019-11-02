1.事件模型？
三个阶段
捕获
目标
冒泡
addEventListener第三个参数：默认为false冒泡阶段  true为捕获阶段
2.请用DOM2级别的事件？
DOM0 onClick  只能绑定一个事件,不能冒泡捕获 e.onClick = () => {}属性会被覆盖
DOM2 addEventListener
DOM3 addEventListener 增加了很多键盘鼠标事件