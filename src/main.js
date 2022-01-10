import Vue from 'vue'
//import './plugins/bootstrap-vue'
import App from  './App.vue';
//import HomePage from './HomePage.vue'
import vuetify from './plugins/vuetify';
import router from './router/index';


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

