import "@babel/polyfill"

class M {}
new M()

let p = new Promise((resolve, reject) => {
  resolve(1)
})
p.then(r => {
  console.log(r)
})

const set = new Set([1, 2])