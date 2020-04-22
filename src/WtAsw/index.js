// scss
import './scss/main.css'
import './scss/WtElement.scss'
import './scss/Elevation.scss'
import './scss/aswNotification.scss'
import './scss/bootstrapGrid.scss'
import './scss/bootstrapSpacing.scss'
import './scss/component.scss'

// js
import notification from './js/notification'

// components
import inputText from './components/input/input_text.vue'
import inputNumber from './components/input/input_number.vue'
import inputEmail from './components/input/input_email.vue'
import inputPassword from './components/input/input_password.vue'
import inputCheckbox from './components/input/input_checkbox.vue'
import inputColor from './components/input/input_color.vue'
import inputSelect from './components/input/input_select.vue'
import inputMultiSelect from './components/input/input_multi_select.vue'
import inputRadio from './components/input/input_radio.vue'
import inputSwitch from './components/input/input_switch.vue'

import autofill from './components/autofill/autofill.vue'
import popover from './components/popover/popover.vue'

import formModal from './components/modal/form_modal.vue'

import josnTree from './components/jsonTree/jsonTree.vue'

// directives
import outerClick from './dircetive/clickOutside'
import tooltip from './dircetive/tooltip'

export default {
  install (Vue) {
    Vue.component('asw-input-text', inputText)
    Vue.component('asw-input-number', inputNumber)
    Vue.component('asw-input-email', inputEmail)
    Vue.component('asw-input-password', inputPassword)
    Vue.component('asw-input-checkbox', inputCheckbox)
    Vue.component('asw-input-color', inputColor)
    Vue.component('asw-input-select', inputSelect)
    Vue.component('asw-input-multi-select', inputMultiSelect)
    Vue.component('asw-input-radio', inputRadio)
    Vue.component('asw-input-switch', inputSwitch)
    Vue.component('asw-autofill', autofill)
    Vue.component('asw-popover', popover)

    Vue.component('asw-json-tree', josnTree)

    Vue.component('asw-form-modal', formModal)

    Vue.directive('asw-click-outside', outerClick)
    Vue.directive('asw-tooltip', tooltip)
    Vue.mixin({
      methods: {
        $OpenNotification (config) {
          notification.OpenNotification(config)
        }
      }
    })
  },
  abc: {}
}
