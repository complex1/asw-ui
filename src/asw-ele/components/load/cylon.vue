<template>
<div :style="getParentStyle" v-on="listeners" >
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <path transform="translate(1.88401 0)" d="M0 12 V20 H4 V12z">
      <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" :dur="duration + 's'" begin="0" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animateTransform>
    </path>
    <path opacity="0.5" transform="translate(5.99073 0)" d="M0 12 V20 H4 V12z">
      <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" :dur="duration + 's'" begin="0.1s" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animateTransform>
    </path>
    <path opacity="0.25" transform="translate(12.3849 0)" d="M0 12 V20 H4 V12z">
      <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" :dur="duration + 's'" begin="0.2s" repeatCount="indefinite" keyTimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline"></animateTransform>
    </path>
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
