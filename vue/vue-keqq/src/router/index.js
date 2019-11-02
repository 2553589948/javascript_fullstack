import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Category from '@/components/Category'
import Classtable from '@/components/Classtable'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
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
