<template>
<div class="asw-code-editor">
  <nav :class="dark ? 'light' : 'dark'" >
    <span>{{title}}</span>
    <asw-input-box type="checkbox" v-model="dark" label="Dark"/>
  </nav>
  <codemirror v-model="code" :options="getCmOption"></codemirror>
</div>
</template>

<script>
import CodeMirror from 'vue-codemirror'
import { JSHINT } from 'jshint'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/material.css'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/addon/lint/lint.css'
window.JSHINT = JSHINT
export default {
  components: {
    codemirror: CodeMirror.codemirror
  },
  props: {
    title: {
      type: String,
      default: 'Code'
    },
    value: {
      type: String,
      default: 'return input;'
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: 'text/javascript'
    },
    lint: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => {}
    },
    CompStyle: {
      type: Object,
      default: function () {
        return {
          height: '200px'
        }
      }
    }
  },
  data: function () {
    return {
      dark: false,
      code: ''
    }
  },
  computed: {
    getCmOption () {
      return {
        tabSize: 2,
        indentUnit: 2,
        autofocus: true,
        line: true,
        lineNumbers: true,
        lineWrapping: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-lint-markers'],
        highlightSelectionMatches: { minChars: 1 },
        matchBrackets: true,
        autoCloseBrackets: true,
        styleActiveLine: true,
        readOnly: this.readOnly,
        mode: this.mode,
        theme: this.getTheme,
        lint: this.lint,
        ...this.options
      }
    },
    getTheme () {
      if (this.dark) {
        return 'material'
      }
      return 'idea'
    }
  },
  methods: {
    setStyle (val) {
      const cm = this.$el.childNodes[1].childNodes[1]
      for (const i in val) {
        cm.style[i] = val[i]
      }
    }
  },
  watch: {
    CompStyle: {
      deep: true,
      handler (val) {
        this.setStyle(val)
      }
    },
    code () {
      this.$emit('input', this.code)
    }
  },
  mounted () {
    this.setStyle(this.CompStyle)
    this.code = this.value
  }
}
</script>

<style lang="scss" >
.asw-code-editor {
  border: 1px solid #e6e3e3;
  border-radius: 0.25em;
  nav{
    background: #f7f7f7;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav.light {
    background: #263238;
  }
  .CodeMirror {
    border: 1px solid #e6e3e3;
    border-radius: 0.25em;
  }
}
</style>
