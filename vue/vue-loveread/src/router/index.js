import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/page/Mine'
import Discover from '@/components/page/Discover'
import Story from '@/components/page/Story'
import Bookshelf from '@/components/page/Bookshelf'
import BookCategory from '@/components/page/bookCategory'
import Reader from '@/components/page/reader'
import Login from '@/components/page/Login'
import Register from '@/components/page/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Story',
      component: Story
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        title: '追寻自我'
      }
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover,
      meta: {
        title: '发现世间百态'
      }
    },
    {
      path: '/bookshelf',
      name: 'Bookshelf',
      component: Bookshelf,
      meta: {
        title: '寻觅历史足迹'
      }
    },
    {
      path: '/story',
      name: 'Story',
      component: Story,
      meta: {
        title: '挖掘浩瀚故事'
      }
    },
    {
      path: '/bookCategory',
      name: 'BookCategory',
      component: BookCategory,
      meta: {
        title: '分类列表'
      }
    },
    {
      path: '/reader',
      name: 'Reader',
      component: Reader,
      meta: {
        title: '详情'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    }
  ]
})
