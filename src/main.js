import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import spacer from '@/components/spacer.vue'
import documentation from '@/components/document.vue'
import propTable from '@/components/propTable.vue'
import eventTable from '@/components/eventTable.vue'
import wtasw from './WtAsw/index.js'
import sparkline from './WtAsw/sparkline'
import dragDrop from './WtAsw/drag&Drop'
import asyncPopup from './WtAsw/asyncPopup'
import test from './WtAsw/components/test'
import { codemirror } from 'vue-codemirror'
Vue.use(wtasw)
Vue.use(sparkline)
Vue.use(dragDrop)
Vue.use(asyncPopup)
Vue.component('asw-test', test)
Vue.component('space', spacer)
Vue.component('codemirror', codemirror)
Vue.component('documentation', documentation)
Vue.component('prop-table', propTable)
Vue.component('event-table', eventTable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
