<template>
  <div :style="style" class="asw-input" :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''">
      {{label}}
      <b v-if="imp">*</b>
    </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <input :style="{width: width}" v-model="bindData"  :class="block ? 'asw-block' : ''" v-on="listeners" v-bind="$attrs" />
    <br v-if="!block" />
    <small :class="'text-' + getMessage.class">{{getMessage.msg}}</small>
  </div>
</template>

<script>
import inputMixin from '../mixins/inputMixins'
export default {
  name: 'asw-input-box',
  mixins: [inputMixin]
}
</script>

<style>
</style>
