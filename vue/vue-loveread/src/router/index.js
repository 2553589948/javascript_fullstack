import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/page/Mine'
import Discover from '@/components/page/Discover'
import Story from '@/components/page/Story'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    }
  ]
})
