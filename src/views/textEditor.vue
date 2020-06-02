<template>
  <div>
    <h2>Json Tree</h2>
    <p></p>
    <documentation :data="code" :component="true">
      <asw-text-editor v-model="showData" />
      {{showData}}
    </documentation>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showData: '<b>Hello text</b>',
      code: {
        code: '<asw-text-editor v-model="showData" />'
      }
    }
  }
}
</script>

<style>
</style>
