<template>
<div :style="getParentStyle" v-on="listeners" >
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <path transform="translate(-6.15421 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
      <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" :dur="duration + 's'" repeatCount="indefinite" begin="0" keyTimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
    </path>
    <path transform="translate(3.2504 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
      <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" :dur="duration + 's'" repeatCount="indefinite" begin="0" keyTimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
    </path>
    <path transform="translate(12.9359 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
      <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" :dur="duration + 's'" repeatCount="indefinite" begin="0" keyTimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
    </path>
    <path transform="translate(22.7445 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12">
      <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" :dur="duration + 's'" repeatCount="indefinite" begin="0" keyTimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"></animateTransform>
    </path>
  </svg>
</div>
</template>

<script>
import loaderMixins from '../mixins/loaderMixins'
export default {
  name: 'asw-loader-balls',
  mixins: [loaderMixins]
}
</script>

<style>

</style>
