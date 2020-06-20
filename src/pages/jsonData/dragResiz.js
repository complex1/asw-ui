export default {
  code: `
  <template>
  <div>
    <div class="parent">
      <asw-drag-resize :showDimension="true" :box="data">
        <div class="child">{{data}}</div>
      </asw-drag-resize>
      <asw-drag-resize :box="data1">
        <div class="child">{{data1}}</div>
      </asw-drag-resize>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
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

  `
}
