<template>
  <div class="component">
    <h3>{{data.title}}</h3>
      <p v-html="data.about"></p>
      <div class="component-show my-2">
        <slot></slot>
      </div>
      <div v-if="!component" class="code-output my-2" v-html="data.code"></div>
      <codemirror v-model="data.code" :options="option"></codemirror>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import './codeMirrorVue'
// import 'codemirror/doc/docs.css'
export default {
  props: ['data', 'component'],
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
  },
  mounted () {
  }
}
</script>

<style>
.component {
    padding: 10px;
    border-top: 1px solid #8e8e8e;
}
.component-show {
  padding: 10px 0px;
}
.component .code-output {
  margin-bottom: 10px;
}
</style>
