<template>
  <div>
    <doc-code v-for="(i) in data.components" :key="i.id" :data="i">
      <div v-html="i.code"></div>
    </doc-code>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: {
        title: 'BUTTON',
        about: 'this is for button',
        components: [
          {
            title: 'Text Color',
            about: '',
            code: `
<button class="dark">Hello</button>

<button class="light">Hello</button>
      `
          },
          {
            title: 'Size',
            about: '',
            code: `
<button class="asw-s">Hello</button>

<button class="asw-m">Hello</button>

<button class="asw-l">Hello</button>'
      `
          },
          {
            title: 'Variant',
            about: '',
            code: `
<button class="asw-primary">Hello</button>

<button class="asw-secondary">Hello</button>

<button class="asw-success">Hello</button>'

<button class="asw-warning">Hello</button>

<button class="asw-info">Hello</button>

<button class="asw-danger">Hello</button>'
      `
          },
          {
            title: 'Outline',
            about: '',
            code: `
<button class="asw-primary-outline">Hello</button>

<button class="asw-secondary-outline">Hello</button>

<button class="asw-success-outline">Hello</button>'

<button class="asw-warning-outline">Hello</button>

<button class="asw-info-outline">Hello</button>

<button class="asw-danger-outline">Hello</button>'
      `
          }
        ]
      }

    }
  }
}
</script>

<style>

</style>
