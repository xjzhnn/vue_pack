import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui';
// 打生产包时注释掉下面的css
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.$axios = axios
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
