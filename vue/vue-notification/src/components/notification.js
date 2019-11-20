import vue from 'vue'

import Notification from './Notification.vue'

// 面向对象为了代码复用 单例模式(详情参考js文件夹中的single)

const NotificationConstructor = vue.extend(Notification) // extend()接收Notification组件props中的对象

let notification
export const open = ({title, content}) => {
  if (notification) {
    notification.title = title
    notification.content = content
  } else {
    notification = new NotificationConstructor({
      el: document.createElement('div'),
      propsData: {
        visiable: true,
        title,
        content
      }
    })
  
    document.body.appendChild(notification.$el)
  }
}

export const close = function () {
  notification.visiable = false
  document.body.removeChild(notification.$el)
  notification = null
}
