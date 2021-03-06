import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Carousel3d from 'vue-carousel-3d';

Vue.use(BootstrapVue);
Vue.use(Carousel3d);

new Vue({
  el: '#app',
  render: h => h(App)
})
