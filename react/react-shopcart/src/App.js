import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

// 函数型组件传递props
function Welcome1(props) {
  return <div>hello, {props.name}</div>
}

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0,
      date: new Date()
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date(),
        count: this.state.count + 1
      })
    }, 1000)

    // setState是异步的
    this.setState((prevState, prevProps) => ({
      count: prevState.count + 1
    }), () => {
      console.log(this.state.count)
    })
  }

  FormatName (user) {
    return user.firstName + ' ' + user.lastName
  }
  render () {
    const name = 'haha'
    const jsx = <p>同学你好</p>
    return (
      <div>
        App组件
        <h1>{name}</h1>
        <h1>{this.state.count}</h1>
        <p>{this.FormatName({firstName: 'kyle', lastName: 'Lee'})}</p>
        <img alt="" src={logo} style={{width: '100px'}} className="img" />
        {jsx}
        <Welcome1 name="kyle" />
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
