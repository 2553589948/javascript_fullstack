import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { Button, Select, Menu, MenuItem, Row, Col, Form, FormItem, Dialog, Input, Message} from "element-ui"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import service from './utils/http'
import urls from './utils/urls'

Vue.use(ElementUI)
// Vue.use(Button).use(Select).use(Menu).use(MenuItem).use(Row).use(Col).use(Form).use(FormItem).use(Dialog).use(Input)

Vue.prototype.$https = service
Vue.prototype.$urls = urls

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
