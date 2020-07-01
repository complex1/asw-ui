<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    :viewBox="getIcon.viewBox"
    :style="{height: size + 'px', width: size + 'px'}"
    :fill="color"
    v-on="listeners"
    v-bind="$attrs"
  >
  <path />
  </svg>
</template>

<script>
import icons from './icon-list.js'
export default {
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
      if (this.icon in icons) {
        return icons[this.icon]
      } else {
        return {
          viewBox: '0 0 0 0',
          d: ''
        }
      }
    },
    listeners () {
      return {
        ...this.$listeners
      }
    }
  },
  methods: {
    iconRender () {
      const ele = this.$el.childNodes[0]
      console.log(JSON.stringify(icons))
      for (const attr in this.getIcon) {
        if (attr !== 'viewBox') {
          ele.setAttribute(attr, this.getIcon[attr])
        }
      }
    }
  },
  watch: {
    icon () {
      this.iconRender()
    }
  },
  mounted () {
    this.iconRender()
  }
}
</script>

<style>

</style>
