<template>
  <div>
    <h2>Drag And Resize</h2>
    <my-doc>
      <asw-drag-resize />
    </my-doc>
    <div class="parent">
      <asw-drag-resize :showDimension="true" :box="data" @click="clicked">
        <div class="child">{{data}}</div>
      </asw-drag-resize>
      <asw-drag-resize :showDimension="true" :box="data1">
        <div class="child">{{data1}}</div>
      </asw-drag-resize>
    </div>
    <doc-code :data="docData">
      </doc-code>
  </div>
</template>

<script>
import data from './jsonData/dragResiz'
export default {
  data: () => {
    return {
      docData: data,
      data: {
        x: 10,
        y: 10,
        z: 10,
        h: 25,
        w: 25,
        drag: true,
        resize: true
      },
      data1: {
        x: 10,
        y: 10,
        z: 11,
        h: 25,
        w: 25,
        drag: true,
        resize: true
      }
    }
  },
  methods: {
    clicked () {
      console.log('clicked')
    }
  }
}
</script>

<style>
.parent {
  height: 300px;
  width: 100%;
  background: lightblue;
  position: relative;
  margin-top: 30px;
}
.child {
  height: 100%;
  width: 100%;
  background: pink;
  word-wrap: break-word;
  text-overflow: ellipsis;
}
</style>
