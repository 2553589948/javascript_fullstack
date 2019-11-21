let loadingNode = document.createElement('div')
loadingNode.style.backgroundColor = '#eee'
loadingNode.style.opacity = '0.6'
loadingNode.style.position = 'absolute'
loadingNode.style.left = 0
loadingNode.style.top = 0
loadingNode.style.right = 0
loadingNode.style.bottom = 0
function toggleLoading(el, binding) {
  if (binding.value) {
    el.appendChild(loadingNode)
  } else {
    el.contains(loadingNode) && el.removeChild(loadingNode)
  }
}

let plugin = {}
// Vue.use()
plugin.install = function (Vue) { // Vue是用Vue.use()的时候传进来的
  Vue.directive('loading', {
    bind: function (el, binding) {
      console.log(el, binding)
      // bind绑定的时候只会调用一次,当数据源发生更新时,需要update()进行更新
      toggleLoading(el, binding)
    },
    update(el, binding) {
      toggleLoading(el, binding)
    }
  })
}

// vue插件提供全局的方法
// 导出
// 通用模块化方案 UMD
if (typeof exports === 'object') {
  module.exports = plugin
} else {
  // window
  window.Vue.use(plugin) // Vue是CDN中引进来的
}

// 如何发布npm包
// 1.注册npm账号
// 2.npm login
// 3.npm publish