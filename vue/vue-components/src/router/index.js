import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/pages/A'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'A',
      component: A
    }
  ]
})
