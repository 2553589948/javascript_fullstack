// 类型断言 类型守卫
interface Person {
  name: string,
  age: number
}
const person = {} as Person // 类型断言会影响代码提示
person.name = 'kyle'
person.age = 20


// 双重断言
const person1 = {} as any as Person
person1.age = 18

// 类型守卫 只能取自己类当中所拥有的属性
class Person1 {
  name = 'wn'
  age = 18
}
class Animal {
  name = 'petty'
  color = 'pink'
}
function getSomething(arg: Person1 | Animal) {
  if (arg instanceof Animal) {
    console.log(arg.color)
    console.log(arg.age)
  }
  if (arg instanceof Person1) {
    console.log(arg.color)
    console.log(arg.age)
  }

  if ('age' in arg) {
    console.log(arg.color)
    console.log(arg.age)
  }
  if ('color' in arg) {
    console.log(arg.color)
    console.log(arg.age)
  }

  if ('name' in arg) {
    console.log(arg.name)
  }
}

getSomething(new Person1())

// 字面量类型守卫
type Foo = {
  kind: 'foo', // 字面量类型
  foo: number
}

type Bar = {
  kind: 'bar',
  bar: number
}
function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo)
    console.log(arg.bar)
  }
  if (arg.kind === 'bar') {
    console.log(arg.foo)
    console.log(arg.bar)
  }
}
