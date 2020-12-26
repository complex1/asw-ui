<template>
  <div>
    <h2>ASW chips</h2>
    <my-doc>
      <asw-chips/>
    </my-doc>
    <hr>
    <h3>Chip Type</h3>
    <div class="flex">
      <asw-chips class="m-1" text="Round" type="round" />
      <asw-chips class="m-1" text="Box" type="box"/>
      <asw-chips class="m-1" text="Tile" type="tile"/>
    </div>
    <my-code :code="code"/>
    <hr>
    <h3>Chip Size</h3>
    <div class="flex align-center">
      <asw-chips class="m-1" v-for="i in 5" :key="i.id" :text="'Size-'+i*5" :size="i*5"  />
    </div>
    <my-code :code="code1"/>
    <hr>
    <h3>Chip Variant</h3>
    <div class="flex align-center">
      <asw-chips class="bg-default m-1" text="default"/>
      <asw-chips class="bg-info m-1" text="info"/>
      <asw-chips class="bg-success m-1" text="success"/>
      <asw-chips class="bg-warning m-1" text="warning"/>
      <asw-chips class="bg-danger m-1" text="danger"/>
    </div>
    <my-code :code="code2"/>
    <hr>
    <h3>Chip Variant</h3>
    <div class="flex align-center">
      <asw-chips class=" m-1" text="red-5" color="red-5" />
      <asw-chips class=" m-1" text="green-5" color="green-5"/>
      <asw-chips class=" m-1" text="gray-5" color="gray-5"/>
      <asw-chips class="m-1" text="yellow-5" color="yellow-5"/>
      <asw-chips class=" m-1" text="blue-5" color="blue-5"/>
    </div>
    <my-code :code="code3"/>
    <hr>
    <h3>Chip With Icon</h3>
    <div class="flex align-center">
      <asw-chips class=" m-1" icon="6-plus" hasIcon text="6-plus"/>
      <asw-chips class=" m-1" icon="android" hasIcon text="android" />
      <asw-chips class=" m-1" icon="apps" hasIcon text="apps"/>
    </div>
    <my-code :code="code4"/>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      code: `
<asw-chips class="m-1" text="Round" type="round" />
<asw-chips class="m-1" text="Box" type="box"/>
<asw-chips class="m-1" text="Tile" type="tile"/>
      `,
      code1: `
<asw-chips class="m-1" v-for="i in 5" :key="i.id" :text="'Size-'+i*5" :size="i*5"  />
      `,
      code2: `
<asw-chips class="bg-default m-1" text="default"/>
<asw-chips class="bg-info m-1" text="info"/>
<asw-chips class="bg-success m-1" text="success"/>
<asw-chips class="bg-warning m-1" text="warning"/>
<asw-chips class="bg-danger m-1" text="danger"/>
      `,
      code3: `
<asw-chips class=" m-1" text="red-5" color="red-5" />
<asw-chips class=" m-1" text="green-5" color="green-5"/>
<asw-chips class=" m-1" text="gray-5" color="gray-5"/>
<asw-chips class="m-1" text="yellow-5" color="yellow-5"/>
<asw-chips class=" m-1" text="blue-5" color="blue-5"/>lass="bg-info m-1" text="Info" color="red-5"/>
      `,
      code4: `
<asw-chips class=" m-1" icon="6-plus" hasIcon text="6-plus"/>
<asw-chips class=" m-1" icon="android" hasIcon text="android" />
<asw-chips class=" m-1" icon="apps" hasIcon text="apps"/>
      `
    }
  }
}
</script>

<style>

</style>
