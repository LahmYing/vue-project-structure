import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './_axios'
// js 引入 scss 变量
import scss_vars from './styles/variables.scss'
import ui from './plugins/ui'
import utils from './plugins/utils'

Vue.config.productionTip = false

// directives
Vue.use(preventReClick)

Vue.prototype.$http = axios
Vue.prototype.$scssVars = scss_vars
Vue.use(ui)
Vue.use(utils)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
