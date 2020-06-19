<template>
  <div>
    <hr>
    <h3>{{data.title || ''}}</h3>
    <p v-html="data.about || ''"></p>
    <slot/>
    <my-code :code="data.code"/>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: () => {}
    }
  }
}
</script>

<style>

</style>
