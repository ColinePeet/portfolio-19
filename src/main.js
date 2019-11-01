import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRellax from 'vue-rellax'
import AOS from 'aos';
import 'aos/dist/aos.css';
 
Vue.use(VueRellax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    AOS.init({
      duration: 1000,
    });
  },
  render: h => h(App)
}).$mount('#app')
