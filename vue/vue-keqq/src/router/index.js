import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import CateDetail from '@/components/CateDetail'
import Category from '@/components/Category'
import Detail from '@/components/Detail'
import Classtable from '@/components/Classtable'
import Mine from '@/components/Mine'

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
      path: '/classtable',
      name: 'Classtable',
      component: Classtable
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
