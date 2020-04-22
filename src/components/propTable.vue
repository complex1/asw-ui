<template>
  <table class="propTable">
    <tr></tr>
    <tr v-for="(val, key) in data" :key="val.id">
      <td>{{key}}</td>
      <td><code>{{val.type}}</code></td>
      <td><code>{{val.default}}</code></td>
      <td>{{val.about}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" >
.propTable {
  width: 100%;
}
.propTable td {
    border: 1px solid gray;
    padding: 10px;
  }
</style>
