<template>
  <div>
    <h2>ELEVATION</h2>
    <p>
      for elevation give asw-ele-{n} (n is from 0 to 24) class
      <br>
      for no elevation use asw-ele-0 class
    </p>
    <documentation :data="data" :component="true">
      <div class="elevation-demo align">
        <div v-for="i in (0,24)" :key="i.id" class="box" :class="'asw-ele-'+i">
          <span>{{i}}</span>
        </div>
      </div>
    </documentation>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      data: {
        code: `
<div class="elevation-demo align">
  <div v-for="i in 24" :key="i.id" class="box" :class="'asw-ele-'+i">
    <span>{{i}}</span>
  </div>
</div>
        `
      }
    }
  }
}
</script>

<style>
.elevation-demo .box {
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
</style>
