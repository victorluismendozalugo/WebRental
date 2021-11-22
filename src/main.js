import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'

//plugins
import Swal from '@/plugins/swal'
import Msg from '@/plugins/msg'

Vue.use(Swal)
Vue.use(Msg)

Vue.config.productionTip = false

Vue.prototype.$loading = function(isLoading){
  this.$store.commit('setLoading', isLoading)
}

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
