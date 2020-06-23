<template>
  <div >
      <h2>Asw Loader</h2>
      <hr>
      <my-doc>
        <asw-load-balls/>
      </my-doc>
      <hr>
      <div class="flex">
        <asw-load-balls class="m-3" size="30" fill="#00e6a8" />
        <asw-load-bars class="m-3" size="30" fill="#ff33ff" />
        <asw-load-beat class="m-3" size="30" fill="#0099ff" />
        <asw-load-bubble class="m-3" size="30" fill="#ff9900" />
        <asw-load-cylon class="m-3" size="30" fill="#9999ff" />
        <asw-load-spin class="m-3" size="30" fill="#00e600" />
        <asw-load-spin-bubble class="m-3" size="30" fill="#993333" />
        <asw-load-barcylon class="m-3" size="30" fill="#002db3" />
      </div>
      <my-code :code="code" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      code: `
<div class="flex">
  <asw-load-balls class="m-3" size="30" fill="#00e6a8" />
  <asw-load-bars class="m-3" size="30" fill="#ff33ff" />
  <asw-load-beat class="m-3" size="30" fill="#0099ff" />
  <asw-load-bubble class="m-3" size="30" fill="#ff9900" />
  <asw-load-cylon class="m-3" size="30" fill="#9999ff" />
  <asw-load-spin class="m-3" size="30" fill="#00e600" />
  <asw-load-spin-bubble class="m-3" size="30" fill="#993333" />
  <asw-load-barcylon class="m-3" size="30" fill="#002db3" />
</div>
      `
    }
  }
}
</script>

<style>

</style>
