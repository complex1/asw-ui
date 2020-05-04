<template>
  <div class="asw-navbar align j-sb item-align-center " :style="getNavbarStyle">
    <div class="asw-navbar-left align  item-align-center">
      <slot name='left'></slot>
    </div>
    <div class="asw-navbar-right align  item-align-center">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    h: {
      type: String,
      default: '50px'
    }
  },
  computed: {
    getNavbarStyle () {
      return {
        height: this.h
      }
    }
  }
}
</script>

<style lang="scss">
</style>
