import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requiredComponent = require.context('.', true, /\.vue$/)
window.elementList = []
requiredComponent.keys().forEach(fileName => {
  // get component config
  const componentConfig = requiredComponent(fileName)

  // get pascal case name of component's
  var componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  componentName = componentName + 'Doc'
  // register component
  window.elementList.push(componentName)
  Vue.component(componentName, componentConfig.default || componentConfig)
})
