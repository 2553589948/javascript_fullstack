import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: Login,
      component: Login
    },
    {
      path: '/main',
      name: Main,
      component: Main
    }
  ]
})
