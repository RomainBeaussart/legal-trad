import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueGeolocation from 'vue-browser-geolocation'

import * as VueGoogleMap from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGeolocation)
Vue.use(VueGoogleMap, {
  load: {
    key: 'AIzaSyAA80ZS9XD4tzZMY0BFYCFSNa9nnInIO8g'
  },
  installComponents: true
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
