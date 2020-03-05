import React from 'react'

const withMouse = (Component) => {
  return class extends React.Component{
    state = {x: 0, y: 0}
    render() {
      return (
        <div>
          <Component />
        </div>
      );
    }
  }
}

// 定义一个纯函数无状态的组件
const App = (props) => {
  const {x, y} = props.mouse
  return (
    <div style={{height: '100vh'}}>
      <h1>mouse position is ({x}, {y})</h1>
    </div>
  )
}

const AppWithMouse = withMouse(App) // 高阶组件替组件干活

export default AppWithMouse