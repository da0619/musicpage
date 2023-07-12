import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'


import MusicHeader from './components/MusicHeader'
import MusicContents from './components/MusicContents'
import MusicFooter from './components/MusicFooter'
// import 컴포넌트명 from 주소
// Vue.component('컴포넌트명',옵션컴포넌트)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
