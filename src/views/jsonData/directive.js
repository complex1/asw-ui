/* eslint-disable no-useless-escape */
export default {
  title: 'Directive',
  about: 'this is for custome directive\'s ',
  components: [
    {
      title: 'Text Color',
      about: 'use v-asw-tooltip',
      code: `
<button v-asw-tooltip='"tooltip"'>This is tooltip</button>
      `
    },
    {
      title: 'Click outside',
      about: '',
      code: `
<template>
  <button v-asw-click-outside='onClickOutside'>ClickOutSide</button>
</template>
<script>
export default {
  methods: {
    onClickOutside () {
      this.$OpenNotification({
        title: 'you clicked outside the \'ClickOutSide\' button',
        type: 'info'
      })
    }
  }
}
</script>
      `
    }
  ]
}
