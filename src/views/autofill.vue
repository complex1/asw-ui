<template>
  <div>
    <h2>Auto Fill</h2>
    <p></p>
    <documentation :data="data.code" :component="true">
      <asw-autofill v-model="bindData" :list="['aa','abb','abc','ccc']" />
      {{bindData}}
    </documentation>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      bindData: '',
      data: {
        code: {
          code: `
<asw-autofill v-model="bindData" :list="['aa','abb','abc','ccc']" />
{{bindData}}
          `
        }
      }
    }
  }
}
</script>

<style>
</style>
