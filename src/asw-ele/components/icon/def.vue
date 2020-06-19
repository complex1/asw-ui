<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    :style="{height: size + 'px', width: size + 'px'}"
    :fill="color"
    @click="$emit('click')"
  >
  <path :d="getIcon"/>
  </svg>
</template>

<script>
import icons from './defIcon.json'
import { validColor } from '../../utills/color'
export default {
  props: {
    icon: {
      type: String,
      default: 'home'
    },
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: '#000000'
    }
  },
  computed: {
    getColor () {
      return validColor(this.color) || '#000000'
    },
    getIcon () {
      if (this.icon in icons) {
        return icons[this.icon]
      } else {
        return ''
      }
    }
  }
}
</script>

<style>

</style>
