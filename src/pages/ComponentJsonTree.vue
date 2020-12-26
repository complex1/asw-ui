<template>
  <div>
    <h2>Asw Select Element's</h2>
    <hr>
    <my-doc>
      <asw-json-tree :data="data"/>
    </my-doc>
    <doc-code :data="{code: '<asw-json-tree :data=\'data\'/>'}">
      <asw-json-tree :data="data"/>
    </doc-code>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: {
        employee: { name: 'John', age: 30, city: 'New York', withNull: null }
      }
    }
  }
}
</script>

<style>

</style>
