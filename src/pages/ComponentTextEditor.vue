<template>
  <div>
    <h2>Asw Text Editor</h2>
    <my-doc>
      <asw-text-editor/>
    </my-doc>
    <hr>
    <asw-text-editor v-model="data" />
    <div class="p-3" >{{data}}</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      data: ''
    }
  }
}
</script>

<style>

</style>
