import LineSparkline from './components/sparklineChart/chartComponent/line.vue'

export default {
  install (Vue) {
    Vue.component('asw-sparkline', LineSparkline)
  }
}
