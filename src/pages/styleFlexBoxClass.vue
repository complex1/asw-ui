<template>
  <div>
    <h2>Asw Flax Box</h2>
    <p>Have basic flax Css</p>
    <div class="row">
      <span class="css-class-chip" v-for="i in gridClass" :key="i.id">{{i}}</span>
    </div>
  </div>
</template>

<script>
import gridClass from './jsonData/flexboxClassList.json'
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
