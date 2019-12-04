import Vue from 'vue'
import App from './App'
import './css/iconfont.css'
import './css/common.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
