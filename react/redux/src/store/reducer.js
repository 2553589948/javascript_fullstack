const defaultState = {
  inputValue: 'kyle',
  list: []
}
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