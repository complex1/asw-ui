<template>
  <div>
    <h2>Asw Panel</h2>
    <div class="row">
      <span class="css-class-chip" v-for="i in gridClass" :key="i.id">{{i}}</span>
    </div>
  </div>
</template>

<script>
import gridClass from './jsonData/panelClassList.json'
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
