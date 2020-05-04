<template>
  <div class="asw-input " :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''"> {{label}} <b v-if="imp">*</b> </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <select
      :class="block ? 'asw-block' : ''"
      @change="changeValue"
      v-model="bindData"
      :disabled="disabled"
    >
      <option v-for="i in getOptionArray" :key="i.id" :value="i.value">{{i.label}}</option>
    </select>
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
