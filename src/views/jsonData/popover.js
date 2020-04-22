export default {
  title: 'POPOVER',
  about: '',
  code: {
    code: `
<div class="align">

  <asw-popover pos="left">
    <template v-slot:title>
      <button class="mx-1">left popover</button>
    </template>
    <template v-slot:option>
        this is popover text
    </template>
  </asw-popover>

  <asw-popover pos="right">
    <template v-slot:title>
      <button class="mx-1">right popover</button>
    </template>
    <template v-slot:option>
        this is popover text
    </template>
  </asw-popover>

  <asw-popover pos="top">
    <template v-slot:title>
      <button class="mx-1">top popover</button>
    </template>
    <template v-slot:option>
        this is popover text
    </template>
  </asw-popover>

  <asw-popover pos="bottom">
    <template v-slot:title>
      <button class="mx-1">bottom popover</button>
    </template>
    <template v-slot:option>
        this is popover text
    </template>
  </asw-popover>
  
</div>
`
  }
}
