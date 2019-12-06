import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/login/StarLogin'
import StarRegister from '@/components/register/StarRegister'
import noteClass from '@/components/noteClass/noteClass'
import noteList from '@/components/noteList/noteList'
import noteDetail from '@/components/noteDetail/noteDetail'
import publishNote from '@/components/publishNote/publishNote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记' // 修改浏览器标题
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎' // 修改浏览器标题
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '登录' // 修改浏览器标题
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: StarRegister,
      meta: {
        title: '注册' // 修改浏览器标题
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: noteClass,
      meta: {
        title: '笔记分类' // 修改浏览器标题
      }
    },
    {
      path: '/noteList',
      name: 'noteList',
      component: noteList,
      meta: {
        title: '笔记笔记列表' // 修改浏览器标题
      }
    },
    {
      path: '/noteDetail',
      name: 'noteDetail',
      component: noteDetail,
      meta: {
        title: '笔记详情' // 修改浏览器标题
      }
    },
    {
      path: '/publishNote',
      name: 'publishNote',
      component: publishNote,
      meta: {
        title: '写笔记' // 修改浏览器标题
      }
    }
  ]
})
