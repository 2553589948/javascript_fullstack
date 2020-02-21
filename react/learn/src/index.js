//入口
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import Lifecycle from './components/Lifecycle'
import CommentVs from './components/CommentVs'
import PureComponentTest from './components/PureComponent'
import ButtonTest from './components/Buttontest'
import Hoc from './components/Hoc'
import ContextSample from './components/ContextSample'
import KFormCreate from './components/KFormCreate'

// class App extends React.Component {
//   render () {
//     //   props
//     return <div>hello {this.props.name}, I am {9+9} years old</div>
//   }
// }
// state  数据源
// 生命周期
// class Counter extends React.Component {
//   constructor (props) {
//     super(props)
//     //初始化构造器时设置内部状态 num值为1
//     this.state = {
//       num: 1
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
  
// //   生命周期方法，组件渲染完成
//   componentDidMount() {
//     console.log('componentDidMount 函数触发')
//   }
// //   生命周期方法 避免组件重复和无意义的渲染 组件更新时使用
//   shouldComponentUpdate(nextProps, nextState) {
//     // console.log(nextProps,nextState)
//     if (nextState.num%2) {
//       return true
//     }
//     return false
//   }
//   handleClick () {
//     // console.log(123)
//     this.setState({
//       num: this.state.num + 1
//     })
//   }
//   render () {
//     return ( 
//       <div>
//         <p>{this.state.num}</p>
//         <button onClick={this.handleClick}>click</button>
//       </div>
//     )
//   }
// }

// 表单
// 渲染列表
// class TodoList extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       text: 'haha',
//       todos: ['learn React', 'learn vue', 'learn koa', 'Ant-design']
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//     this.handleClickAdd = this.handleClickAdd.bind(this)
//   }
//   handleChange (e) {
//     console.log(e.target.value)
//     this.setState({
//       text: e.target.value
//     })
//   }
//   handleClick () {
//     if (this.state.text) {
//       this.setState({
//         text: ''
//       })
//     }
//   }
//   handleClickAdd () {
//     if (this.state.text) {
//       this.setState({
//         todos: [...this.state.todos, this.state.text],
//         text: ''
//       })
//     }
//   }
//   render () {
//     return (
//       <div>
//         {this.state.text}
//         <input type="text" value={this.state.text} onChange={this.handleChange} />
//         <button onClick={this.handleClick}>clear</button>
//         <button onClick={this.handleClickAdd}>add</button>
//         <ul>
//           {this.state.todos.map(item => {
//             return <li key={item}>{item}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// React 16 新增
// 1. render函数支持返回数组和字符串
// 2.异常处理,添加componentDidCatch钩子函数获取组件错误
class React16 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  render () {
    return (
      <div>
        {this.state.hasError ? '出错了' : null}
        <ClickWriteError/>
        <FeatureReturnFraments/>
      </div>
    )
  }
}

class ClickWriteError extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      error: true
    })
  }
  render () {
    if (this.state.error) {
      throw new Error('出错了！')
    }
    return <button onClick={this.handleClick}>抛出错误</button>
  }
}

class FeatureReturnFraments extends React.Component {
  render () {
    return [
      <p key="key1">React很不错</p>,
      'dddd',
      <p key="key2">Ant-design框架是React</p>,
      'ssh'
    ]
  }
}

// ReactDOM.render(<PureComponentTest/>, document.querySelector('#root'))
// ReactDOM.render(<ButtonTest/>, document.querySelector('#root'))
// ReactDOM.render(<Hoc state="react"/>, document.querySelector('#root'))
// ReactDOM.render(<ContextSample />, document.querySelector('#root'))
ReactDOM.render(<KFormCreate />, document.querySelector('#root'))