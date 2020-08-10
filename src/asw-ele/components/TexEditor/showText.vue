<template>
<div class="ql-snow">
      <div class="ql-editor" v-html="data"></div>
</div>
</template>

<script>
export default {
  props: ['data']
}
</script>
<style src="quill/dist/quill.snow.css"></style>
<style>
.ql-editor {
  min-height: auto;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
