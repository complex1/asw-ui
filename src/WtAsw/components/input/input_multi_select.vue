<template>
  <div class="asw-input" :class="block ? 'asw-block' : ''">
    <label v-if="label !== ''">
      {{label}}
      <b v-if="imp">*</b>
    </label>
    <p v-if="sublabel !== ''">{{sublabel}}</p>
    <div v-for="i in getOptionArray" :key="i.id">
      <input type="checkbox" @change="changeSelect" :id="i.id" :value="i.value" />
      <label :for="i.id">{{i.label}}</label>
    </div>
    <br v-if="!block" />
    <small :class="'c-' + getMessage.class">{{getMessage.msg}}</small>
  </div>
</template>

<script>
import inputMixin from './inputMixin'
export default {
  mixins: [inputMixin],
  methods: {
    changeSelect (e) {
      if (!Array.isArray(this.bindData)) {
        this.bindData = []
      }
      if (e.target.checked) {
        this.bindData.push(e.target.value)
      } else {
        var index = this.bindData.indexOf(e.target.value)
        if (index !== -1) {
          this.bindData.splice(index, 1)
        }
      }
    }
  }
}
</script>
