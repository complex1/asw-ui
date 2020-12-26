<template>
  <label for="">
    {{label}}
    <input :value="value" v-on="listeners" v-bind="$attrs" >
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: String
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: event => {
          this.$emit('input', event.target.value)
        }
      }
    }
  }

}
</script>

<style>

</style>
