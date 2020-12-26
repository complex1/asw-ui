import { validColor } from '../../utills/color'
const setProperty = function (span, data) {
  span.setAttribute('class', 'asw--badges')
  span.setAttribute('id', 'asw_badges')
  span.style.color = validColor(data.color)
  span.style.background = validColor(data.bgColor)
  if (data.value === '' || data.value === undefined) {
    span.setAttribute('class', 'asw--badges-pointer')
    span.innerHTML = ''
  } else {
    span.setAttribute('class', 'asw--badges-value')
    span.innerHTML = data.value
  }
  if (('show' in data) && !data.show) {
    span.style.display = 'none'
  } else {
    span.style.display = 'block'
  }
  return span
}

const bind = function (el, binding, vnode) {
  console.log({ fun: 'bind', el, binding, vnode })
}

const inserted = function (el, binding, vnode) {
  console.log({ fun: 'inserted', el, binding, vnode })
  el.style.position = 'relative'
  let span = document.createElement('span')
  span = setProperty(span, binding.value)
  el.append(span)
}

const update = function (el, binding, vnode) {
  console.log({ fun: 'update', el, binding, vnode })
  let span = el.querySelector('#asw_badges')
  span = setProperty(span, binding.value)
  el.append(span)
}

const compnentUpdated = function (el, binding, vnode) {
  console.log({ fun: 'compnentUpdated', el, binding, vnode })
}

const unbind = function (el, binding, vnode) {
  console.log({ fun: 'unbind', el, binding, vnode })
}
export default {
  isLiteral: true,
  bind: bind,
  inserted: inserted,
  update: update,
  compnentUpdated: compnentUpdated,
  unbind: unbind
}
