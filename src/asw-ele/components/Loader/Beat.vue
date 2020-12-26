<template>
<div :style="getParentStyle" v-on="listeners" >
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="0" width="4" height="10" transform="translate(0 15.1763)">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" :dur="duration + 's'" repeatCount="indefinite"></animateTransform>
    </rect>
    <rect x="10" y="0" width="4" height="10" transform="translate(0 1.84293)">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" :begin="duration/3 + 's'" :dur="duration + 's'" repeatCount="indefinite"></animateTransform>
    </rect>
    <rect x="20" y="0" width="4" height="10" transform="translate(0 11.4904)">
      <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" :begin="duration*2/3 + 's'" :dur="duration + 's'" repeatCount="indefinite"></animateTransform>
    </rect>
  </svg>
</div>
</template>

<script>
import loaderMixins from '../mixins/loaderMixins'
export default {
  name: 'asw-beat',
  mixins: [loaderMixins]
}
</script>

<style>

</style>
