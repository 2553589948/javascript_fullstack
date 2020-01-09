import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentInput';

class App extends React.Component {
  // 静态属性
  state = {
    commentList: []
  }
  OnPublish = (userName, comment) => {
    console.log(userName, comment)
    let obj = {userName, comment}
    // 不可变数据
    // Object.assign()第一级属性深拷贝,以后级别属性浅拷贝,下面例子可说明
    // let s ={name: {asd: '123'}, age: 18}
    // let d = Object.assign({}, s)
    // d.name.asd = '123456789'
    // d.age = 20
    // console.log(d, s)
    let list = this.state.commentList.slice(0) // 深拷贝
    list.push(obj)
    this.setState({
      commentList: list
    })
  }
  // 删除
  handleDel = (event) => {
    const i = parseInt(event.target.dataset.i)
    const list = this.state.commentList.slice(0)
    list.splice(i, 1)
    this.setState({
      commentList: list
    })
  }
  render() {
    return (
      <>
        <CommentInput OnPublish={this.OnPublish} />
        {/* <CommentList /> */}
        {this.state.commentList.length}
        {this.state.commentList && this.state.commentList.map(
          (c, i) => {
            return (
              <li key={i}>
                {c.userName}: {c.comment}
                <button data-i={i} onClick={this.handleDel}>删除</button>
              </li>
            )
          }
        )}
      </>
    )
  }
}

export default App;
