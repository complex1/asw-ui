<template>
<div :style="getParentStyle" v-on="listeners" >
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="30px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="0" width="4" height="20">
      <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" :dur="duration + 's'" repeatCount="indefinite"></animate>
    </rect>
    <rect x="7" y="0" width="4" height="20">
      <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" :dur="duration + 's'" repeatCount="indefinite"></animate>
    </rect>
    <rect x="14" y="0" width="4" height="20">
      <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" :dur="duration + 's'" repeatCount="indefinite"></animate>
    </rect>
  </svg>
</div>
</template>

<script>
import loaderMixins from '../mixins/loaderMixins'
export default {
  mixins: [loaderMixins]
}
</script>

<style>

</style>
