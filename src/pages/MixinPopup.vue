<template>
  <div>
    <h2>Asw Popup</h2>
    <doc-code :data="data[0]" :component="true">
      <button @click='OpenApprovePopup'>click me</button>
    </doc-code>
    <doc-code :data="data[1]" :component="true">
      <button @click='OpenInputPopup'>click me</button>
    </doc-code>
  </div>
</template>

<script>
import data from './jsonData/popup'
import popup from '../asw-ele/plugin/popup'
import '../asw-ele/plugin/popup/popup.scss'
import '../asw-ele/plugin/notification/notification.scss'
import notification from '../asw-ele/plugin/notification'
export default {
  data: () => {
    return {
      data: data
    }
  },
  methods: {
    OpenInputPopup () {
      popup.InputPopup('Input your name')
        .then(e => {
          notification({
            title: 'Hi! ' + e + ' welcome to world of UI',
            type: 'success'
          })
        })
        .catch(e => {
          notification({
            title: e,
            type: 'danger'
          })
        })
    },
    OpenApprovePopup () {
      const msg = `
      you sure, you want to <span style="color: red;">cancel</span> your ticket to <b>goa</b> ?
      `
      popup.ApproverPopup(msg)
        .then(() => {
          notification({
            title: 'Your Goa plan has been canceled',
            type: 'success'
          })
        })
        .catch(() => {
          notification({
            title: 'You decline to cancel your goa plan',
            type: 'danger'
          })
        })
    }
  }
}
</script>
