<template>
<div :style="getParentStyle" v-on="listeners" >
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="6.92949" width="4" height="17.141">
      <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" :dur="duration + 's'" repeatCount="indefinite"></animate>
      <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" :dur="duration + 's'" repeatCount="indefinite"></animate>
    </rect>
    <rect x="10" y="10.9295" width="4" height="9.14101">
      <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" :dur="duration + 's'" repeatCount="indefinite"></animate>
      <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" :dur="duration + 's'" repeatCount="indefinite"></animate>
    </rect>
    <rect x="20" y="11.0705" width="4" height="8.85899">
      <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" :dur="duration + 's'" repeatCount="indefinite"></animate>
      <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" :dur="duration + 's'" repeatCount="indefinite"></animate>
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
