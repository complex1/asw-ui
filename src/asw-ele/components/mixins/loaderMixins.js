export default {
  props: {
    size: {
      type: [Number, String],
      default: 25
    },
    fill: {
      type: String,
      default: 'gray'
    },
    duration: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    getParentStyle () {
      return {
        height: this.size + 'px',
        width: this.size + 'px',
        fill: this.fill
      }
    },
    listeners () {
      return {
        ...this.$listeners
      }
    }
  }
}
