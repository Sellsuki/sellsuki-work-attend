// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import './assets/css/main.css'
import 'buefy/lib/buefy.min.css'

Vue.use(Vuex)
Vue.component(Buefy.Checkbox.name, Buefy.Checkbox)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
