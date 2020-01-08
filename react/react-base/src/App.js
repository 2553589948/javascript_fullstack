import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'

// jsx
function App() {
  let person = [{age: 18, name: 'lee'}, {age: 20, name: 'liu'}]
  // 用find或filter声明式去寻找age > 19的人
  let p = person.find(p => p.age > 19)
  // 命令式
  for(let pp of person) {
    if (pp.age > 19) {}
  }
  // 取到所有人年龄(声明式)
  let ages = person.map(p => p.age)
  console.log(ages)
  // map(映射) filter reduce

  let arr = [0, 1, 2] // jsx会自动展开数组,对象不行
  // 在jsx中false和null是不显示任何内容的

  function receiveFromButton(d) {
    console.log('子组件传过来：', d)
  }
  return (
    <div className="App">
      {/* <Button /> */}
      <Button type="primary"
      receiveFromButton={receiveFromButton}>登录</Button>
      {
        arr
      }
      {
        person.map((p, i) => {
        return <li key={i}>{p.name}-{p.age}</li>
        })
      }
      {
        person.length > 3 ? <h3>有三个人</h3> : <h3>小于三个人</h3>
      }
      {
        person.length === 2 && <h3>有2个人</h3>
      }
      {
        false
      }
      {
        null
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
