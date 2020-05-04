import moveBlock from './components/moveBlock/moveBlock.vue'
import aswDrag from './components/dragDrop/Drag.vue'
import aswDrop from './components/dragDrop/Drop.vue'
export default {
  install (Vue) {
    Vue.component('move-block', moveBlock)
    Vue.component('asw-drag', aswDrag)
    Vue.component('asw-drop', aswDrop)
  }
}
