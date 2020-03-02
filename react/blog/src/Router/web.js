import loadable from '../utils/loadable'
import { HomeOutlined } from '@ant-design/icons'

const List = loadable(() => import('../pages/web/list/list'))
// const About = loadable(() => import('../pages/web/about'))

const webRoutes = [
  {
    menu: true,
    icon: 'HomeOutlined',
    title: '首页',
    path: '/web/index',
    component: List
  }
]

export default webRoutes