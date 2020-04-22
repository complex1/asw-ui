export default {
  props: {
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    options: {
      type: [Array, Object],
      default: () => []
    },
    imp: {
      type: Boolean,
      default: false
    },
    sublabel: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    },
    msg: {
      type: [Object, String],
      default: function () {
        return {
          message: '',
          variant: ''
        }
      }
    }
  },
  data: function () {
    return {
      bindData: ''
    }
  },
  computed: {
    getMessage () {
      if (typeof this.msg === 'string') {
        return {
          msg: this.msg,
          class: 'c-default'
        }
      } else {
        return {
          msg: this.msg.message || '',
          class: this.msg.variant || 'default'
        }
      }
    },
    getOptionArray () {
      const arr = []
      if (Array.isArray(this.options)) {
        this.options.forEach(e => {
          if (typeof e !== 'object') {
            arr.push({
              label: e,
              value: e
            })
          } else {
            arr.push(e)
          }
        })
        return arr
      } else if (typeof this.options === 'object') {
        for (const i in this.options) {
          arr.push({
            label: this.options[i],
            value: i
          })
        }
        return arr
      }
      return arr
    }
  },
  methods: {
    changeValue (e) {
      this.$emit('change', e)
      this.$emit('input', this.bindData)
    }
  },
  watch: {
    value () {
      this.bindData = this.value
    }
  },
  mounted () {
    this.bindData = this.value
  }
}
