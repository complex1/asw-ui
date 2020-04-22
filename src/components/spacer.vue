<template>
  <span :style="{'width': w, 'display': 'inline-block'}"></span>
</template>

<script>
export default {
  props: {
    w: {
      default: '20px'
    }
  }
}
</script>
