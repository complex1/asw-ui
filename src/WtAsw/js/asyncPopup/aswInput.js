/* eslint-disable promise/param-names */
import './aswInput.css'
const showPopup = function (title) {
  const ContainerDiv = document.createElement('div')
  ContainerDiv.innerHTML = `
  <div class="asw-inputpopup-box asw-ele-10 light">
    <div class="asw-inputpopup-message">
      <div>${title}</div>
      <input type="text" class="asw-inputpopup-text " id="asw_inputPopup_text" placeholder="" />
    </div>
    <div class="asw-inputpop-button f-r">
    <button id="asw_inputpopup_cancel" class=" mx-2 dark asw-alert" >Cancel</button>
    <button id="asw_inputpopup_ok" class="dark asw-success">OK</button>
    </div>
  </div>`
  ContainerDiv.setAttribute('class', 'asw-inputpopup-container asw-modal')
  ContainerDiv.setAttribute('id', 'asw_inputpopup')
  document.getElementsByTagName('body')[0].append(ContainerDiv)
}
const closePopup = function () {
  const popup = document.getElementById('asw_inputpopup')
  popup.children[0].setAttribute('class', 'asw-inputpopup-box asw-ele-10 remove-popup')
  return popup
}
const aswInputPopup = function (title = 'Name') {
  showPopup(title)
  return new Promise((reslove, reject) => {
    document.getElementById('asw_inputpopup_ok').addEventListener('click', function () {
      const textValue = document.getElementById('asw_inputPopup_text').value
      const popup = closePopup()
      setTimeout(function () {
        popup.remove()
        return reslove(textValue)
      }, 900)
    })
    document.getElementById('asw_inputpopup_cancel').addEventListener('click', function () {
      const popup = closePopup()
      setTimeout(function () {
        popup.remove()
        return reject(new Error('something bad happened'))
      }, 900)
    })
  })
}
export default aswInputPopup
