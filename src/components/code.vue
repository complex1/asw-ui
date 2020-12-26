<template>
  <codemirror class="my-doc-code" v-model="code" :options="option"></codemirror>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import './codeMirrorVue'
export default {
  props: ['code'],
  data: () => {
    return {
      option: {
        mode: {
          name: 'vue'
        },
        readOnly: true,
        htmlMode: true,
        lineNumbers: true,
        collapseIdentical: false,
        highlightDifferences: true
      }
    }
  }
}
</script>

<style lang="scss" >
.my-doc-code {
  .CodeMirror {
      margin: 10px;
      width: auto !important;
      height: auto !important;
      min-height: 100px !important;
      overflow: auto !important;
      overflow-x: auto !important;
      border: 1px solid #c1c1c1;
      border-radius: 10px;
  }
}
</style>
