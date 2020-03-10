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
    // console.log(store.getState())

    this.inputChange = this.inputChange.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange) // 只要store里面的数据发生变化实时获取
  }

  inputChange (e) {
    const action = {
      type: 'change_value',
      value: e.target.value
    }
    store.dispatch(action)
  }

  storeChange() {
    console.log('ff')
    this.setState(store.getState())
  }
  
  render() {
    return (
      <div>
        <Input value={this.state.inputValue} placeholder="todo info" style={{width: 300, marginRight: 10}} onChange={this.inputChange} />
        <Button type="primary">提交</Button>
      </div>
    );
  }
}

export default TodoList
