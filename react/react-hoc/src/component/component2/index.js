import React, {Component} from 'react'

// hoc高阶组件
function HOC(WrapComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
    }
    
    onChange = (event) => {
      // this.setState在这里是异步的
      this.setState({
        name: event.target.value
      })
      console.log(this.state.name)
    }

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
      }
      return <WrapComponent {...newProps} />
    }
  }
}

// 装饰器 相当于HOC(Example)
@HOC
class Example extends Component {
  render() {
    return (
      <div>
        <input {...this.props.name} />
      </div>
    );
  }
}

// const Example1 = HOC(Example)

export default Example