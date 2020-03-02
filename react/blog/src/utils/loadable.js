import React from 'react'
import Loadable from 'react-loadable'

// 通用的过场组件
const loadingComponent = () => {
  return (
    <div>loading</div>
  )
}

// 过场组件默认采用通用的，如果传入了新的过场组件，就采用新的
export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}