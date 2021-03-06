import Vue from 'vue'
import App from './App.vue'
import './asw-ele/scss/index.scss'
import aswEle from './asw-ele'
import './pages'
import code from '@/components/code.vue'
import docTem from '@/components/docTemp.vue'
import docCode from '@/components/docCode.vue'
import { codemirror } from 'vue-codemirror'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(aswEle)
Vue.component('my-code', code)
Vue.component('my-doc', docTem)
Vue.component('doc-code', docCode)
Vue.component('codemirror', codemirror)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
