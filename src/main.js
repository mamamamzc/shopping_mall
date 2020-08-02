import App from './App.vue'
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from './store/index.js'
import router from './router/index.js'
import api from '../api/index.js'

// 全局引入UI库 vant
import '@/plugins/vant'

Vue.config.productionTip = false
// 3. 安装组件库
Vue.use(Antd)

Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
