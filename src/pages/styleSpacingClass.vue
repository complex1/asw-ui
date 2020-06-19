<template>
  <div>
    <h2>Asw Spacing</h2>
    <p>inspire by <strong>Bootstrap</strong></p>
    <div class="row">
      <span class="css-class-chip" v-for="i in gridClass" :key="i.id">{{i}}</span>
    </div>
  </div>
</template>

<script>
import gridClass from './jsonData/spacingClassList.json'
export default {
  data: function () {
    return {
      gridClass: gridClass
    }
  }
}
</script>

<style>

</style>
