<template>
  <div ref="dropElement" @click="emitEvent">
      <slot></slot>
  </div>
</template>

<script>
export default {

  methods: {
    emitEvent (e) {
      this.$emit('click', e)
    },
    dragOver (e) {
      e.preventDefault()
    },
    drop (e) {
      try {
        const elementJson = JSON.parse(e.dataTransfer.getData('data'))
        elementJson.x = e.offsetX
        elementJson.y = e.offsetY
        this.$emit('Drop', elementJson)
      } catch {}
    }
  },
  mounted () {
    const ele = this.$refs.dropElement
    ele.addEventListener('dragover', this.dragOver)
    ele.addEventListener('drop', this.drop)
  },
  beforeDestroy () {
    const ele = this.$refs.dropElement
    ele.removeEventListener('dragover', this.dragOver)
    ele.removeEventListener('drop', this.drop)
  }

}
</script>

<style>

</style>
