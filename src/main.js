import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios'
// js 引入 scss 变量
import scss_vars from './ui/_styles/variables.scss'
import ui from './ui'
import utils from './utils'
import preventReClick from './directives/preventReClick'

Vue.config.productionTip = false

// directives
Vue.use(preventReClick)

Vue.prototype.$http = axios
Vue.prototype.$scssVars = scss_vars

Vue.use(ui)
Vue.use(utils)

Vue.component('Navigation', require('./components/Nav/Navigation.vue').default)
Vue.component('piece', require('./views/components/piece.vue').default)
Vue.component('ii-btn', require('./components/imitate-ivew/button/button.vue').default)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
