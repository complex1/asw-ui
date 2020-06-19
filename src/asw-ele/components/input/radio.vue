<template>
  <div class="asw-input " :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''"> {{label}} <b v-if="imp">*</b> </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <div v-for="i in getOptionArray" :key="i.id" >
      <input type="radio" v-bind="$attrs" v-on="listeners" :name="_uid" :id="i.id" :value="i.value">
      <label :for="i.id">{{i.label}}</label>
    </div>
    <br v-if="!block">
    <small :class="'c-' + getMessage.class">{{getMessage.msg}}</small>
  </div>
</template>

<script>
import inputMixin from '../mixins/inputMixins'
import { getOptionArray } from '../../utills/optionArray'
export default {
  name: 'AswRadio',
  mixins: [inputMixin],
  props: {
    options: {
      type: [Array, Object],
      required: true,
      default: () => []
    }
  },
  computed: {
    getOptionArray () {
      return getOptionArray(this.options)
    }
  }
}
</script>
