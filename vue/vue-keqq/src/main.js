// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/icon.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
import { DropdownMenu, DropdownItem, Button, Toast, Swipe, SwipeItem, Field, CellGroup } from 'vant'
import axios from 'axios'

Vue.use(DropdownMenu).use(DropdownItem).use(Button).use(Toast).use(Swipe).use(SwipeItem).use(Field).use(CellGroup)

Vue.use(Mint)
Vue.prototype.$http = axios

Vue.config.productionTip = false

router.beforeEach((to, from, next) => { // 路由重定向路由守卫(解决登录过期问题)
  // document.title = to.meta.title
  // if (to.path === '/login' && sessionStorage.getItem('userInfo') !== null) {
  //   next({
  //     path: '/'
  //   })
  // } else if (to.path !== '/login' && sessionStorage.getItem('userInfo') === null) {
  //   next({
  //     path: '/login'
  //   })
  // } else {
  //   next()
  // }
  next()
  window.scrollTo(0, 0)
  // console.log(from)
  // console.log(to)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
