<template>
  <div>
    <h2>Asw Select Element's</h2>
    <hr>
    <my-doc>
      <asw-pagination v-model="currentPage" :page-count="199"/>
    </my-doc>
    <doc-code :data="{code: '<asw-pagination  v-model=\'currentPage\' :page-count=\'199\'/>'}">
      <asw-pagination v-model="currentPage" :page-count="199"/>
    </doc-code>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>

<style>

</style>
