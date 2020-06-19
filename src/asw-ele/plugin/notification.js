const GetParentAlert = function () {
  const container = document.getElementById('aswNotificationContainer')
  if (container === null) {
    const parentDiv = document.createElement('div')
    parentDiv.setAttribute('id', 'aswNotificationContainer')
    parentDiv.setAttribute('class', 'aswNotificationContainer')
    document.body.appendChild(parentDiv)
    return parentDiv
  } else {
    return container
  }
}

const OpenNotification = function (config) {
  var parent = GetParentAlert()

  const notificationDiv = document.createElement('div')
  notificationDiv.setAttribute('class', 'aswNotification')

  const notificationFlag = document.createElement('div')
  notificationFlag.className = `aswNotification-flag aswNotification-${config.type}`

  const title = document.createElement('div')
  title.setAttribute('class', 'aswNotification-title')
  title.innerText = config.title || ''
  notificationFlag.append(title)

  const text = document.createElement('div')
  text.setAttribute('class', 'aswNotification-text')
  text.innerHTML = config.text || ''
  notificationFlag.append(text)

  const cross = document.createElement('div')
  cross.setAttribute('class', 'aswNotification-close')
  cross.innerHTML = '&#10060;'
  notificationFlag.append(cross)

  notificationDiv.append(notificationFlag)
  const timeout = config.timeout || 5000
  parent.append(notificationDiv)

  const closeNotification = function () {
    if (typeof config.callback === 'function') {
      config.callback()
    }
    notificationFlag.removeAttribute('class', 'aswNotification-flag')
    notificationFlag.className = `aswNotification-flag-out aswNotification-${config.type}`
    setTimeout(function () { notificationDiv.remove() }, 900)
  }
  cross.addEventListener('click', closeNotification)
  setTimeout(closeNotification, timeout - 1000)
}

export default {
  OpenNotification
}
