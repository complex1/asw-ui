<template>
  <div ref="dropElement" @click="emitEvent">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    dropkey: {
      type: [Array, String],
      default: () => []
    }
  },
  methods: {
    emitEvent (e) {
      this.$emit('click', e)
    },
    dragOver (e) {
      e.preventDefault()
    },
    dragEnter (e) {
      e.preventDefault()
      e.target.classList.add('onoverclass')
    },
    dragLeave (e) {
      e.preventDefault()
      e.target.classList.remove('onoverclass')
    },
    validKey (key) {
      const dropkey = this.dropkey
      if (typeof dropkey === 'string') {
        return key === dropkey
      } else if (Array.isArray(dropkey)) {
        if (dropkey.length > 0) {
          return dropkey.indexOf(key) !== -1
        } else {
          return true
        }
      } else {
        return false
      }
    },
    drop (e) {
      try {
        const elementJson = JSON.parse(e.dataTransfer.getData('data'))
        e.target.classList.remove('onoverclass')
        if (this.validKey(elementJson.key)) {
          elementJson.x = e.offsetX
          elementJson.y = e.offsetY
          this.$emit('Drop', elementJson)
        } else {
          this.$emit('error', 'key is not correct')
        }
      } catch (e) {
        this.$emit('error', e)
      }
    }
  },
  mounted () {
    const ele = this.$refs.dropElement
    ele.addEventListener('dragover', this.dragOver)
    ele.addEventListener('drop', this.drop)
    ele.addEventListener('dragenter', this.dragEnter)
    ele.addEventListener('dragleave', this.dragLeave)
  },
  beforeDestroy () {
    const ele = this.$refs.dropElement
    ele.removeEventListener('dragover', this.dragOver)
    ele.removeEventListener('drop', this.drop)
    ele.removeEventListener('dragenter', this.dragEnter)
    ele.removeEventListener('dragleave', this.dragLeave)
  }

}
</script>

<style>

</style>
