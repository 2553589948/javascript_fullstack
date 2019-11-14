import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//  es7js懒加载() => import('@/page/home/Home')详情见module.html/module.js
//  npm install -D sass-loader@7.3.1  node-sass
//  npm i axios vue-awesome-swiper -S
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/page/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/page/city/City')
    }
  ]
})
