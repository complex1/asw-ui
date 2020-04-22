<script>
export default {
  props: {
    listLength: Number
  },
  data () {
    return {
      selectedIndex: 0,
      handler: 0,
      range: 0
    }
  },
  render (h) {
    return h(
      'div',
      this.$scopedSlots.default({ selectedIndex: this.selectedIndex })
    )
  },
  watch: {
    listLength () {
      this.selectedIndex = 0
      this.handler = 0
    }
  },
  methods: {
    keyHandler (e) {
      /**
        38 - up
        40 - down
        9 - tab
        13 - enter
       */
      const key = e.which || e.keyCode
      if (key === 38 || (e.shiftKey && key === 9)) {
        this.handleKeyUp(e)
      } else if (key === 40 || key === 9) {
        this.handleKeyDown(e)
      } else if (key === 13) {
        this.handleEnter(e)
      }
    },
    handleEnter (e) {
      e.preventDefault()
      this.$emit('selected', this.selectedIndex)
    },
    handleKeyUp (e) {
      e.preventDefault()
      if (this.selectedIndex > 0) {
        this.selectedIndex--
        if (this.range === 0) {
          this.$el.offsetParent.scrollBy(0, -30)
        } else {
          this.range--
        }
      }
    },
    handleKeyDown (e) {
      e.preventDefault()
      if (this.selectedIndex < this.listLength - 1) {
        this.selectedIndex++
        if (this.range === 6) {
          this.$el.offsetParent.scrollBy(0, 30)
        } else {
          this.range++
        }
      }
    },
    addKeyHandler (e) {
      window.addEventListener('keydown', this.keyHandler)
    },
    removeKeyHandler () {
      window.removeEventListener('keydown', this.keyHandler)
    }
  },
  created () {
    this.addKeyHandler()
  },
  destroyed () {
    this.removeKeyHandler()
  }
}
</script>
