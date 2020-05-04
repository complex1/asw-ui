<template>
  <div class="asw-input " :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''"> {{label}} <b v-if="imp">*</b> </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <input
      type="number"
      :class="block ? 'asw-block' : ''"
      @keyup="changeValue"
      :placeholder="placeholder"
      v-model.number="bindData"
      :min='min'
      :max="max"
      :disabled="disabled"
      >
    <br v-if="!block">
    <small :class="'c-' + getMessage.class">{{getMessage.msg}}</small>
  </div>
</template>

<script>
import inputMixin from './inputMixin'
export default {
  mixins: [inputMixin],
  props: {
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 1000000000000
    }
  }
}
</script>

<style>

</style>
