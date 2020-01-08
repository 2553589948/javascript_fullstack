import React from 'react'
// import React

function Button(props) {
  let date = new Date().getTime()
  // 子组件向父组件传值
  const handleClick = () => {
    console.log(123)
  }
  const { type, children, receiveFromButton } = props
  // 父组件传递一个回调函数过来,子组件通过参数通知父组件
  receiveFromButton(date)
  return (
  <button onClick={handleClick}
  className={type === 'primary' && 'primary-class'}>{children}</button>
  )
}

export default Button