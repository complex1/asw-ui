export default {
  title: 'Moving Block',
  about: 'for boundry its parent should have relative position',
  component: {
    code: `
<template>
  <div class="parent">
    <move-block :box="box">
      <div class="child">Moving Div</div>
    </move-block>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      box: {
        x: 0,
        y: 0,
        h: 100,
        w: 100,
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
  background: pink;
  position: relative;
}
.child {
  width: 100%;
  height: 100%;
  background: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
`
  }
}
