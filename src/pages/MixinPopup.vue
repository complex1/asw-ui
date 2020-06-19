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
export default {
  data: () => {
    return {
      data: data
    }
  },
  methods: {
    OpenInputPopup () {
      this.$aswInputPopup('Input your name')
        .then(e => {
          this.$ShowNotification({
            title: 'Hi! ' + e + ' welcome to world of UI',
            type: 'success'
          })
        })
        .catch(e => {
          this.$ShowNotification({
            title: e,
            type: 'danger'
          })
        })
    },
    OpenApprovePopup () {
      const msg = `
      you sure, you want to <span style="color: red;">cancel</span> your ticket to <b>goa</b> ?
      `
      this.$aswApproverPopup(msg)
        .then(() => {
          this.$ShowNotification({
            title: 'Your Goa plan has been canceled',
            type: 'success'
          })
        })
        .catch(() => {
          this.$ShowNotification({
            title: 'You decline to cancel your goa plan',
            type: 'danger'
          })
        })
    }
  }
}
</script>
