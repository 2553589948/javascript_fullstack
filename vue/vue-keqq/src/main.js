// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/icon.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
import { DropdownMenu, DropdownItem, Button } from 'vant'
import axios from 'axios'

Vue.use(DropdownMenu).use(DropdownItem).use(Button)

Vue.use(Mint)
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
