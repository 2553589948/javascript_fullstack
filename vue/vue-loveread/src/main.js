// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import '../static/css/reset.styl'
import {Swipe, SwipeItem, Icon, Field, ActionSheet, Toast, Panel, Uploader, SwipeCell, Button, Cell, Dialog} from 'vant'
import 'vant/lib/index.css'
// import 'amfe-flexible'
import 'element-ui/lib/theme-chalk/index.css'
import {Dropdown, DropdownMenu, DropdownItem} from 'element-ui'

Vue.use(Dropdown).use(DropdownMenu).use(DropdownItem)

Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(ActionSheet).use(Toast).use(Panel).use(Uploader).use(SwipeCell).use(Button).use(Cell).use(Dialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
