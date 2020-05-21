import { isPC } from './utils'

export default {
  install (Vue) {
    Vue.prototype.$isPC = () => {
      return isPC()
    }
  }
}
