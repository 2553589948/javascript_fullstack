// 泛型generic
const arr: number[] = [1, 2, 3]
const list: Array<number | string> = [1, 2, 3, 4, 'aa'] // 泛型(一种定义数组的形式)
// 声明泛型变量<T> 用来捕获开发者传入的数据类型,我们就可以使用<T>做参数类型和返回值的类型
function returnItem<T>(para: T): T { // 多种不同类型的参数同时传入
  return para
}

function swap<T, U>(tuple:[T, U]) {
  return [tuple[0], tuple[1]]
}
swap([6, 'six'])

// 泛型变量
function getArrayLength<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

// 泛型接口
interface ReturnItem<T> {
  (para: T): T
}
const returnItem1: ReturnItem<number> = para => para

// 泛型类
class Stack<T> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
const app = new Stack()
app.push('abc')

// 泛型约束
type Params = number | string // 对泛型进行约束不能啥类型都传进来
class Stack1<T extends Params> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
const app1 = new Stack1<number>()
const app2 = new Stack1<string>()
// const app3 = new Stack1<boolean>()

// 泛型约束与索引类型  U extends keyof T(key必须是object中的属性)
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}
const a = {
  name: 'kyle',
  age: 18
}
getValue(a, 'age')

// 使用多重类型进行泛型约束
interface FirstInter {
  doSomething(): number
}
interface SecondInter {
  doSomethingElse(): string
}

interface childInter extends FirstInter, SecondInter {

}

class Demo<T extends childInter> {
  private genericProperty: T

  useT () {
    this.genericProperty.doSomething()
    this.genericProperty.doSomethingElse()
  }
}

// 泛型与new
function factory<T>(apple: {new(): T}): T { // {new(): T}泛型可被构造
  return new apple()
}
