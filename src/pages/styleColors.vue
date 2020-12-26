<template>
  <div>
    <h2>Colors Var's</h2>
    <div v-for="(val, key) in colorList" :key="key">
      <h3>{{key}}</h3>
      <div class="">
        <div class="m-1 p-2" v-for="i in val" :key="i.id" :style="{'background': i[1]}">{{`$${key}-${i[0]}: ${i[1]}`}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import colorList from './jsonData/colorList.json'
export default {
  data: function () {
    return {
      colorList: colorList
    }
  }
}
</script>

<style>

</style>
