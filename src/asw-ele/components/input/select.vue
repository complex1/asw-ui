<template>
  <div class="asw-input " :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''"> {{label}} <b v-if="imp">*</b> </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <select
      :class="block ? 'asw-block' : ''"
      v-on="listeners"
      v-bind="$attrs"
      :value="value"
    >
      <option v-for="i in getOptionArray" :key="i.id" :value="i.value">{{i.label}}</option>
    </select>
    <br v-if="!block">
    <small :class="'c-' + getMessage.class">{{getMessage.msg}}</small>
  </div>
</template>

<script>
import inputMixin from '../mixins/inputMixins'
import { getOptionArray } from '../../utills/optionArray'
export default {
  name: 'AswSelect',
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
