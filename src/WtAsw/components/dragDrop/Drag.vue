<template>
  <div draggable="true" ref="DragElement" @click="$emit('click')">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Object, String, Array, Number, Boolean, undefined, null],
      default: () => {}
    }
  },
  methods: {
    dragStart (e) {
      const TransferData = {
        data: this.data
      }
      e.dataTransfer.setData('data', JSON.stringify(TransferData))
    }
  },
  mounted () {
    const ele = this.$refs.DragElement
    ele.addEventListener('dragstart', this.dragStart)
  },
  beforeDestroy () {
    const ele = this.$refs.DragElement
    ele.removeEventListener('dragstart', this.dragStart)
  }
}
</script>

<style>
</style>
