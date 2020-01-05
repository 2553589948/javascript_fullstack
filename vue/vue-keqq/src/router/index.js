import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CateDetail from '@/components/CateDetail'
import Category from '@/components/Category'
import Detail from '@/components/Detail'
import Classtable from '@/components/Classtable'
import Mine from '@/components/Mine'
import CourseDetail from '@/components/CourseDetail'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Info from '@/page/Course/Info'
import Entries from '@/page/Course/Entries'
import RelateClass from '@/page/Course/RelateClass'
import Comment from '@/page/Course/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          component: CateDetail
        }
      ]
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/courseDetail',
      name: 'CourseDetail',
      component: CourseDetail,
      children: [
        {
          path: '/courseDetail',
          component: Info
        },
        {
          path: '/courseDetail/info',
          component: Info
        },
        {
          path: '/courseDetail/entries',
          component: Entries
        },
        {
          path: '/courseDetail/relateClass',
          component: RelateClass
        },
        {
          path: '/courseDetail/comment',
          component: Comment
        }
      ]
    },
    {
      path: '/classtable',
      name: 'Classtable',
      component: Classtable
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
