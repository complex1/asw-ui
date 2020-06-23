<template>
<div :style="getParentStyle" v-on="listeners" >
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <circle transform="translate(8 0)" cx="0" cy="16" r="0.0276721">
      <animate attributeName="r" values="0; 4; 0; 0" :dur="duration + 's'" repeatCount="indefinite" begin="0" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animate>
    </circle>
    <circle transform="translate(16 0)" cx="0" cy="16" r="0.965109">
      <animate attributeName="r" values="0; 4; 0; 0" :dur="duration + 's'" repeatCount="indefinite" begin="0.3" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animate>
    </circle>
    <circle transform="translate(24 0)" cx="0" cy="16" r="3.926">
      <animate attributeName="r" values="0; 4; 0; 0" :dur="duration + 's'" repeatCount="indefinite" begin="0.6" keyTimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animate>
    </circle>
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
