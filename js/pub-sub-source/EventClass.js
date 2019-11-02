// const subPub = {
//   'price': [
//     () => {console.log(3)},
//     () => {console.log(4)}
//   ]
// }
// for (let i = 0; i < subPub.price.length; i ++) {
//   console.log('---', subPub.price[i]);
//   subPub.price[i]();
// }

// function foo() {
//   console.log('foo')
// }
// subPub.foo = [foo]
// console.log(subPub)

class Events {
  constructor () {
    this.listener = {}
  }
  on (key, fn) {
    if(!this.listener[key]) {
      this.listener[key] = []
    }
    this.listener[key].push(fn)
    // this.listener.push(fn)
  }
  emit (key) {
    // console.log(this.listener)
    // for (let fn of this.listener) {
    //   fn()
    // }
    for(let i=0; i<this.listener[key].length; i++) {
      this.listener[key][i]()
    }
  }
}
const ev = new Events()
ev.on('abc', () => {console.log(1)})
ev.on('bc',() => {console.log(2)})
ev.emit('abc')  //执行的