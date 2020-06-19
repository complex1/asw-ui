import commonMixins from '../mixins/commonMixins'
export default {
  inheritAttrs: false,
  mixins: [commonMixins],
  props: {
    value: String,
    size: {
      type: String,
      default: 'm'
    },
    sublabel: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    msg: {
      type: [Object, String],
      default: ''
    },
    imp: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit('input', event.target.value)
        }
      }
    },
    getMessage () {
      if (typeof this.msg === 'string') {
        return {
          msg: this.msg,
          class: 'text-default'
        }
      } else {
        return {
          msg: this.msg.message || '',
          class: this.msg.variant || 'default'
        }
      }
    }
  }
}
