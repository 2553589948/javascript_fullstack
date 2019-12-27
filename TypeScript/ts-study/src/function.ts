// const add = (a: number, b?: number) => a + (b ? b : 0)
const add = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)

// 重载(重新载入函数,自定义传入参数)
interface Direction3 {
  top: number
  right: number
  bottom: number,
  left: number
}

function assigned(all: number): Direction3
function assigned(topAndbottom: number, leftandright: number): Direction3
function assigned(top: number, right: number, bottom: number, left: number): Direction3

function assigned(a: number, b?:number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}
// assigned(1, 2, 3)
assigned(1)
assigned(1, 2)
// assigned(1, 2, 3)
assigned(1, 2, 3, 4)
