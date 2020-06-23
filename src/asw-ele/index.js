import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Notification from './plugin/notification'
import popup from './plugin/popup'
import badges from './directive/badges'

const requiredComponent = require.context('./components', true, /\.vue$/)
requiredComponent.keys().forEach(fileName => {
  // get component config
  const componentConfig = requiredComponent(fileName)

  // get pascal case name of component's
  let componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  // register component
  componentName = 'Asw' + componentName
  componentName = componentName.replace(/SingleComponent/, '')
  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.mixin({
  methods: {
    $ShowNotification (config) {
      Notification.OpenNotification(config)
    }
  }
})
Vue.mixin(popup)
Vue.directive('badges', badges)
