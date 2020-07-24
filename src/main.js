import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import VueI18n from 'vue-i18n';
import messages from './lang';
import router from './router'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies);

Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
