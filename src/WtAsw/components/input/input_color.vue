<template>
  <div class="asw-input " :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''"> {{label}} <b v-if="imp">*</b> </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <input
      type="color"
      :class="block ? 'asw-block' : ''"
      @change="changeValue"
      :placeholder="placeholder"
      :disabled="disabled"
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
