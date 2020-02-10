// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'; // axios http请求库
import { store } from './store/store';
import './common/css/index.scss';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$http = axios;
Vue.use(Mint);

// 定义基础路由的位置
axios.defaults.baseURL = '/api';
// require('./mock/sellMock.js');

Vue.config.productionTip = false;
// import axios from 'axios'
// Vue.prototype.$axios = axios;
// Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
