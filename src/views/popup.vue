<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <documentation :data="data.components[0]" :component="true">
      <button @click='OpenApprovePopup'>click me</button>
    </documentation>
    <documentation :data="data.components[1]" :component="true">
      <button @click='OpenInputPopup'>click me</button>
    </documentation>
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
          this.$OpenNotification({
            title: 'Hi! ' + e + ' welcome to world of UI',
            type: 'success'
          })
        })
        .catch(e => {
          this.$OpenNotification({
            title: e,
            type: 'alert'
          })
        })
    },
    OpenApprovePopup () {
      console.log(this)
      const msg = `
      you sure, you want to <span style="color: red;">cancel</span> your ticket to <b>goa</b> ?
      `
      this.$aswApproverPopup(msg)
        .then(() => {
          this.$OpenNotification({
            title: 'Your Goa plan has been canceled',
            type: 'success'
          })
        })
        .catch(() => {
          this.$OpenNotification({
            title: 'You decline to cancel your goa plan',
            type: 'alert'
          })
        })
    }
  }
}
</script>
