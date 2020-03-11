const defaultState = {
  inputValue: 'kyle',
  list: []
}
// 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
  if (action.type === 'change_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
    // reducer有一个限制,能取出state但不能直接修改state
  }
  console.log(state, action)
  return state
}