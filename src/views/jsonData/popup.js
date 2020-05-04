export default {
  title: 'Popup',
  about: '',
  components: [
    {
      title: 'Approver Popup',
      about: 'you can call it by <b>this.$aswApprovePopup(yourMessage)</b>',
      code: `
<template>
  <div>
    <button @click='OpenApprovePopup'>click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    OpenApprovePopup () {
      const msg = 'you sure, you want to <span style="color: red;">cancel</span> your ticket to <b>goa</b>?'
      this.$aswApprovePopup(msg)
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
    
      `
    },
    {
      title: 'Input Popup',
      about: 'you can call it by <b>this.$aswInputPopup(youTitle)</b>',
      code: `
<template>
  <div>
    <button @click='OpenInputPopup'>click me</button>
  </div>
</template>

<script>
export default {
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
  }
}
</script>
    
      `
    }
  ]
}
