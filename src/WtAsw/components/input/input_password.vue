<template>
  <div class="asw-input " :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''"> {{label}} <b v-if="imp">*</b> </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <input
      type="password"
      :class="block ? 'asw-block' : ''"
      @keyup="changeValue"
      :placeholder="placeholder"
      v-model="bindData">
    <br v-if="!block">
    <small :class="'c-' + getMessage.class">{{getMessage.msg}}</small>
  </div>
</template>

<script>
import inputMixin from './inputMixin'
export default {
  mixins: [inputMixin]
}
</script>
