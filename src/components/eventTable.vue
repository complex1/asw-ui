<template>
  <table class="propTable">
    <tr></tr>
    <tr v-for="(val) in data" :key="val.id">
      <td>{{val.name}}</td>
      <td><code>{{val.action}}</code></td>
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
  margin: 10px;
}
.propTable td {
    border: 1px solid gray;
    padding: 10px;
  }
</style>
