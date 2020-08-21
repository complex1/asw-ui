import badges from './directive/badges'
import Chips from './components/Chips'
import Code from './components/Code'
import DataTable from './components/DataTable'
import Drag from './components/Drag&Drop/Drag'
import Drop from './components/Drag&Drop/Drop'
import DragResize from './components/DragResize'
import FormModal from './components/FormModal'
import IconsDef from './components/IconsDef'
import InputBox from './components/InputBox'
import InputRadio from './components/InputRadio'
import InputSelect from './components/InputSelect'
import InputTextarea from './components/InputTextarea'
import JsonTree from './components/JsonTree'
import LoaderBalls from './components/Loader/Balls'
import LoaderBeat from './components/Loader/Beat'
import LoaderBarcylon from './components/Loader/Barcylon'
import LoaderBars from './components/Loader/Bars'
import LoaderBubble from './components/Loader/Bubble'
import LoaderSpin from './components/Loader/Spin'
import LoaderSpinBubble from './components/Loader/SpinBubble'
import Popover from './components/Popover'
import ProgressBar from './components/ProgressBar'
import TexEditor from './components/TexEditor'
import ShowText from './components/TexEditor/showText'
export default {
  install (Vue) {
    Vue.component('asw-chips', Chips)
    Vue.component('asw-code', Code)
    Vue.component('asw-data-table', DataTable)
    Vue.component('asw-drag', Drag)
    Vue.component('asw-drop', Drop)
    Vue.component('asw-drag-resize', DragResize)
    Vue.component('asw-form-modal', FormModal)
    Vue.component('asw-icon-def', IconsDef)
    Vue.component('asw-input-box', InputBox)
    Vue.component('asw-input-radio', InputRadio)
    Vue.component('asw-input-select', InputSelect)
    Vue.component('asw-input-textarea', InputTextarea)
    Vue.component('asw-json-tree', JsonTree)
    Vue.component('asw-load-balls', LoaderBalls)
    Vue.component('asw-load-barcylon', LoaderBarcylon)
    Vue.component('asw-load-bars', LoaderBars)
    Vue.component('asw-load-beat', LoaderBeat)
    Vue.component('asw-load-bubble', LoaderBubble)
    Vue.component('asw-load-spin', LoaderSpin)
    Vue.component('asw-load-spin-bubble', LoaderSpinBubble)
    Vue.component('asw-popover', Popover)
    Vue.component('asw-progress-bar', ProgressBar)
    Vue.component('asw-text-editor', TexEditor)
    Vue.component('asw-show-text', ShowText)
    Vue.directive('badges', badges)
  }
}
