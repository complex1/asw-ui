<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <documentation :data="data.components[0]" :component="true">
      <button v-asw-tooltip='"tooltip"'>This is tooltip</button>
    </documentation>
    <documentation :data="data.components[1]" :component="true">
      <button v-asw-click-outside='onClickOutside'>ClickOutSide</button>
    </documentation>
  </div>
</template>

<script>
import data from './jsonData/directive'
export default {
  data: function () {
    return {
      data: data
    }
  },
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

<style>
</style>
