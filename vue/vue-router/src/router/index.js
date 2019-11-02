import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import mine from '@/components/mine'
import detail from '@/components/detail'
import mine2 from '@/components/mine2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      children: [
        {
          path: 'mine2',
          component: mine2,
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
  ]
})
