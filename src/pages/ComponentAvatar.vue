<template>
  <div>
    <h2>Asw Avatar</h2>
    <div v-for="i in data" :key="i.id">
      <doc-code :data="i">
        <div v-html="i.code"></div>
      </doc-code>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: [
        {
          title: 'Text Color',
          about: '',
          code: `
<div class="flex">
  <div class=" mx-2 asw-avatar dark">WT</div>
  <div class=" mx-2 asw-avatar light">WT</div>
  <div class=" mx-2 asw-avatar round dark">WT</div>
  <div class=" mx-2 asw-avatar round light">WT</div>
</div
      `
        },
        {
          title: 'Size',
          about: '',
          code: `
<div class="flex">
  <div class=" xs mx-2 round asw-avatar dark">WT</div>
  <div class=" s mx-2 round asw-avatar dark">WT</div>
  <div class=" m mx-2 round asw-avatar dark">WT</div>
  <div class=" l mx-2 round asw-avatar dark">WT</div>
  <div class=" xl mx-2 round asw-avatar dark">WT</div>
  <div class=" xxl mx-2 round asw-avatar dark">WT</div>
</div
      `
        },
        {
          title: 'Variant',
          about: '',
          code: `
<div class="flex">
  <div class="  mx-2 bg-primary round asw-avatar dark">WT</div>
  <div class="  mx-2 bg-danger round asw-avatar dark">WT</div>
  <div class="  mx-2 bg-success round asw-avatar dark">WT</div>
  <div class="  mx-2 bg-warning round asw-avatar dark">WT</div>
  <div class="  mx-2 bg-info round asw-avatar dark">WT</div>
  <div class="  mx-2 round asw-avatar dark">WT</div>
</div
      `
        },
        {
          title: 'Outline',
          about: '',
          code: `
<div class="flex">
  <div class=" mx-2 asw-avatar">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" >
  </div>
  <div class=" mx-2 round asw-avatar">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" >
  </div>
</div>
      `
        }
      ]
    }
  }
}
</script>

<style>

</style>
