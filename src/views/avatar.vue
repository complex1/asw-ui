<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <div v-for="i in data.components" :key="i.id">
      <documentation :data="i"/>
    </div>
  </div>
</template>

<script>
import data from './jsonData/avatar'
export default {
  data: function () {
    return {
      data: data
    }
  }
}
</script>

<style>
</style>
