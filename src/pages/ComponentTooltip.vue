<template>
  <div class="dark">
    <h2>Asw Tooltip</h2>
    <doc-code v-for="i in data" :key="i.id" :data="i">
      <div class="flex" v-html="i.code"></div>
    </doc-code>
  </div>
</template>

<script>
import data from './jsonData/tooltip'
export default {
  data: function () {
    return {
      data: data
    }
  }
}
</script>

<style>
.my-box {
  padding: 10px 15px;
    background: #d8d8d8;
    border-radius: 5px;
}
</style>
