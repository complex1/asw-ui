<template>
  <div>
    <h2>ASW Code</h2>
    <my-doc>
      <asw-code/>
    </my-doc>
    <hr>
    <asw-code v-model="data" />
    {{data}}
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: 'var a = 0;'
    }
  }
}
</script>

<style>

</style>
