// ts中原始数据类型8种
const isLoading: boolean = false
const decLiteral: number = 6
const hexLiteral: number = 0xf00d // 进制

const book: string = 'TypeScript深入浅出'
// void空类型 ts中新增
 // 函数没有返回值就是空类型,有返回值就是返回值的类型
function user(): void {
  console.log('kyle')
}

const a: void = undefined
const b: void = null

let u: undefined = undefined
let n: null = null

const sym1 = Symbol('key1') // Symbol定义的变量是唯一的
const sym2 = Symbol('key2')

// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2 // true

// BigInt大数整型
const max = BigInt(Number.MAX_SAFE_INTEGER)
const max1 = max + 1n
const max2 = max + 2n
max1 === max2 // false