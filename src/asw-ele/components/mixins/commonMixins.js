import { validColor } from '../../utills/color'
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    bg: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {
      style: {}
    }
  },
  watch: {
    color: {
      immediate: true,
      handler (newVal) {
        if (validColor(newVal) !== null) {
          this.style.color = newVal
        }
      }
    },
    bg: {
      immediate: true,
      handler (newVal) {
        if (validColor(newVal) !== null) {
          this.style.backgroundColor = newVal
        }
      }
    }
  }
}
