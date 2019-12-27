// 抽象类

// abstract class Animal {
//   abstract makeSound(): void
//   move(): void {
//     console.log('roaming the earch...')
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log('miao miao')
//   }
// }
// const cat = new Cat()
// cat.makeSound()

// const animal = new Animal() 抽象类只能继承不能实例化,以保证私有性

// 访问限定符
class Cat {
  public run() {
    console.log('跑起来了...')
  }
  private () { // 私有方法只能在类当中调用
    console.log('吃起来了...')
  }
  protected sleep() { // 只能在类当中和及其子类中调用
    console.log('洗洗睡吧...')
  }
}
const cat = new Cat()
cat.run()
// cat.eat()
// cat.sleep()

class GTR extends Cat {
  init () {
    this.run()
  }
}

// const car = new GTR()
// car.init()

const gtr = new GTR()
// gtr.sleep()

// class 可以作为接口
// export default class Props { // react中使用广泛
//   public children: Array<React.ReactElement<any>>
// }