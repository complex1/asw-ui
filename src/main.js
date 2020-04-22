import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import spacer from '@/components/spacer.vue'
import documentation from '@/components/document.vue'
import propTable from '@/components/propTable.vue'
import eventTable from '@/components/eventTable.vue'
import wtasw from './WtAsw/index.js'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(wtasw)
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
