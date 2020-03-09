// useRef用来保存普通变量(不传参)
import React, {useRef, useEffect, useState} from 'react'

function Example () {
  const inputEle = useRef(null)
  const onClickBtn = () => {
    inputEle.current.value = 'kyle'
    console.log(inputEle)
  }

  // --------------
  const [text, setText] = useState('haha')
  const textRef = useRef()
  useEffect(() => {
    textRef.current = text
    console.log(textRef.current)
  })
  // ----------------
  return (
    <div>
      <input ref={inputEle} type="text"/>
      <button onClick={onClickBtn}>在input上展示文字</button>
      <br/>
      <input value={text} onChange={e => {setText(e.target.value)}} />
    </div>
  )
}

export default Example