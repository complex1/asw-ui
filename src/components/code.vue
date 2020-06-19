<template>
  <codemirror v-model="code" :options="option"></codemirror>
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

<style>

</style>
