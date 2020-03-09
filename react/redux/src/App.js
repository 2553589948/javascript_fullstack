import React, {Component} from 'react';
// redux = flux + Reduce
import {Input, Button} from 'antd'
import 'antd/dist/antd.css'
import store from './store'

// store的创建


class TodoList extends Component{
  constructor(props) {
    super(props);

    this.state = store.getState()
    console.log(store.getState())
  }
  
  render() {
    return (
      <div>
        <Input value={this.state.inputValue} placeholder="todo info" style={{width: 300, marginRight: 10}} />
        <Button type="primary">提交</Button>
      </div>
    );
  }
}

export default TodoList
