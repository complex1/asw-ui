/* eslint-disable promise/param-names */
import './aswApprover.css'
const showPopup = function (msg) {
  const ContainerDiv = document.createElement('div')
  ContainerDiv.innerHTML = `
  <div class="asw-approvepopup-box asw-ele-10 ta-c">
    <div class="asw-approvepopup-message">${msg}</div>
    <div class="asw-approvepop-button  f-r">
      <button id="asw_approvepopup_cancel" class=" mx-2 dark asw-alert" >No</button>
      <button id="asw_approvepopup_ok" class="dark asw-success">Yes</button>
    </div>
  </div>`
  ContainerDiv.setAttribute('class', 'asw-modal asw-approvepopup-container')
  ContainerDiv.setAttribute('id', 'asw_approvepopup')
  document.getElementsByTagName('body')[0].append(ContainerDiv)
}

const closePopup = function () {
  const popup = document.getElementById('asw_approvepopup')
  popup.children[0].setAttribute('class', 'asw-approvepopup-box asw-ele-10 ta-c remove-popup')
  return popup
}
const aswApprovePopup = function (msg) {
  showPopup(msg)
  return new Promise((reslove, reject) => {
    document.getElementById('asw_approvepopup_ok').addEventListener('click', function () {
      const popup = closePopup()
      setTimeout(function () {
        popup.remove()
        reslove('accepted')
      }, 900)
    })
    document.getElementById('asw_approvepopup_cancel').addEventListener('click', function () {
      const popup = closePopup()
      setTimeout(function () {
        popup.remove()
        reject(new Error('rejected'))
      }, 900)
    })
  })
}
export default aswApprovePopup
