import asyncPopup from './js/asyncPopup'
export default {
  install (Vue) {
    Vue.mixin(asyncPopup)
  }
}
