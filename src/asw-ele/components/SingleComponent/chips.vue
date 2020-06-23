<template>
  <div class="asw-chip" :class="type" :style="{fontSize: size+'px', color: getColor}" v-on='listeners'>
    <asw-icon-def v-if="hasIcon" :icon="icon"  :color="getColor"  :size="size*4/5" />
    <span v-html="text" ></span>
  </div>
</template>

<script>
import { validColor } from '../../utills/color'
export default {
  props: {
    text: {
      type: [String, Number],
      default: ''
    },
    hasIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 16
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    type: {
      type: String,
      default: 'round'
    }
  },
  computed: {
    getColor () {
      return validColor(this.color, '#ffffff')
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
