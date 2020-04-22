<template>
  <div class="asw-input " :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''"> {{label}} <b v-if="imp">*</b> </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <input
      type="email"
      :class="getClass"
      @keyup="changeValue"
      @change="validateEmail"
      :placeholder="placeholder"
      v-model="bindData">
    <br v-if="!block">
    <small :class="'c-' + getMessage.class">{{getMessage.msg}}</small>
  </div>
</template>

<script>
import inputMixin from './inputMixin'
export default {
  mixins: [inputMixin],
  data: function () {
    return {
      validated: true
    }
  },
  methods: {
    validateEmail (e) {
      // eslint-disable-next-line no-useless-escape
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      if (reg.test(this.bindData) === false) {
        this.validated = false
        return
      }
      this.validated = true
    }
  },
  computed: {
    getClass () {
      let Class = ''
      Class += !this.validated ? 'error-fill ' : ''
      Class += this.block ? 'asw-block ' : ''
      return Class
    }
  }
}
</script>

<style>
