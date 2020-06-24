<template>
<div :style="getBarStyle" class="asw-progress">
  <div :style="getProgressStyle" class="asw-progress-bar"></div>
  <div class="asw-progress-label" v-html="label"></div>
</div>
</template>

<script>
import { validColor } from '../../utills/color'
export default {
  props: {
    type: {
      type: String,
      default: 'linear'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '20px'
    },
    max: {
      type: [Number, String],
      default: 100
    },
    value: {
      type: [Number, String],
      default: 50
    },
    label: {
      type: [Number, String],
      default: ''
    },
    fill: {
      type: String,
      default: '#007bff'
    }
  },
  data: () => {
    return {
      parentWidth: 0
    }
  },
  computed: {
    getBarStyle () {
      return {
        height: this.height,
        width: this.width,
        fontSize: this.height
      }
    },
    getProgressStyle () {
      const width = (this.parentWidth * this.value) / this.max
      return {
        width: width + 'px',
        height: '100%',
        backgroundColor: validColor(this.fill, '#007bff')
      }
    }
  },
  mounted () {
    this.parentWidth = this.$el.getBoundingClientRect().width
  }
}
</script>

<style>

</style>
