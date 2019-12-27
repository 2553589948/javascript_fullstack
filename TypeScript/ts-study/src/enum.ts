enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up)
console.log(Direction['Down'])

// 异构枚举
enum yg {
  No = 0,
  Yes = 'yes'
}

// 反向映射 key<=>value
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction1[Direction1['Down']]) // 枚举当中key和value可以相互取值

// 联合枚举
// enum Direction2 {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }
enum Direction2 {
  Up,
  Down,
  Left,
  Right
}
const aaa: number = 0
console.log(aaa === Direction2['Up']) // true

type c = 0 // type用来自定义类型的
declare let bbb: c
// bbb = 1
bbb = Direction2.Up // ok

// 枚举对象名相同的话可以合并
// 一个变量被定义为枚举对象类型的话 那这个变量可以被赋值为对象中的属性