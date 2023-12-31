import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQr from 'vue-qr'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueQr)
Vue.use(axios)
Vue.use(ElementUI)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
