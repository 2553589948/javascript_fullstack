// react16.8新特性  hook
// hook(钩子函数)它可以在不编写class的情况下使用state内部的状态和React其他的特性

// 使用state Hook
import React, {useState} from 'react'

export default function Hookstest () {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0)

  // 做数据获取、设置订阅、以及手动更改react组件中的DOM -- 副作用
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}