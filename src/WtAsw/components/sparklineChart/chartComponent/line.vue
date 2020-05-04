<template>
  <div :id="getId"></div>
</template>

<script>
import mixins from './mixin'
export default {
  mixins: [mixins],
  computed: {
    ChartConfig () {
      return {
        type: 'line'
      }
    }
  }
}
</script>
