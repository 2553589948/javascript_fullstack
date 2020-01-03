import {add} from './math'
import {includes} from 'lodash' // 打包之后体积72kb tree-shaking失效？
// 如何解决此方式下tree-shaking失效问题？使用babel-plugin-import包:功能就是把上面这种语法转为下面这种
// import includes from 'lodash/includes' // 打包之后体积7.34kb


// 没有用到的方法reduce有必要打包吗？没必要
console.log(add(1, 2))

console.log(includes([1, 2], 1))