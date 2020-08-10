<template>
  <i v-on="listeners" :style="getStyle" :class="getIcon" v-bind="$attrs"/>
</template>

<script>
export default {
  name: 'asw-icons-def',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: 'home'
    },
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    getIcon () {
      return `fa fa-${this.icon}`
    },
    getStyle () {
      return {
        fontSize: this.size,
        color: this.color
      }
    },
    listeners () {
      return {
        ...this.$listeners
      }
    }
  }
}
</script>

<style>

</style>
