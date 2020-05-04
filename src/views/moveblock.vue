<template>
<div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <documentation :data="data.component" :component="true">
      <div class="parent">
        <move-block :box="box">
          <div class="child">Moving Div</div>
        </move-block>
      </div>
    </documentation>
  </div>
</template>

<script>
import data from './jsonData/movingblock'
export default {
  data: () => {
    return {
      data: data,
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
