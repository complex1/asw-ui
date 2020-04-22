<template>
  <div class="asw-input " :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''"> {{label}} <b v-if="imp">*</b> </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <div v-for="i in getOptionArray" :key="i.id" >
      <input type="radio" @change="changeValue" :id="i.id" v-model="bindData" :value="i.value">
      <label :for="i.id">{{i.label}}</label>
    </div>
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
