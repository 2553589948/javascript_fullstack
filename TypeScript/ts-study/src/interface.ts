const getUsername = (user: User) => user.name
const getUsername1 = (user: User) => {
  user.say = function (words: string) {
    return 'hello world'
  }
}


interface User { // User是自定义的类型
  name: string,
  age?: number, // 当传进来的值不确定有没有时
  readonly isMale: boolean, // readonly只读不可被修改
  say: (words: string) => string // 可以替换为say: Say
}

interface Say {
  (words: string): string
}

interface Config {
  width?: number,
  [propName: string]: any // 添加字符串索引签名
}
function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}
let mySquare = CalculateAreas({width: 5})

// 类型断言
let mySquare1 = CalculateAreas({widdth: 5} as Config)
// 添加字符串索引签名
let mySquare2 = CalculateAreas({widdth: 5})
// 将字面量赋值给另外一个变量(一般不使用)
// let options = {widdth: 5}
// let mySquare3 = CalculateAreas({options})

interface SupperUser {
  getGrade: () => void
}
// 继承接口
interface VIPUser extends User, SupperUser {
  broadcast: () => void
}