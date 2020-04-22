<template>
  <div class="component">
    <h3>{{data.title}}</h3>
      <p>{{data.about}}</p>
      <slot class="component-show" ></slot>
      <div v-if="!component" class="code-output" v-html="data.code"></div>
      <codemirror v-model="data.code" :options="{
        mode: 'xml',
        htmlMode: true,
        lineNumbers: true,
        collapseIdentical: false,
        highlightDifferences: true
      }"></codemirror>
  </div>
</template>

<script>
import 'codemirror/mode/xml/xml.js'
export default {
  props: ['data', 'component'],
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
