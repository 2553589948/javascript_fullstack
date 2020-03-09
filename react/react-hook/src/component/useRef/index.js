// useRef获取DOM元素
import React, {useRef} from 'react'

function Example () {
  const inputEle = useRef(null)
  const onClickBtn = () => {
    inputEle.current.value = 'kyle'
    console.log(inputEle)
  }
  return (
    <div>
      <input ref={inputEle} type="text"/>
      <button onClick={onClickBtn}>在input上展示文字</button>
    </div>
  )
}

export default Example