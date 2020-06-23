<template>
  <div>
    <h2>Asw Badges</h2>
    <div class="flex">
      Directive: <asw-chips class="mx-2 bg-info" type="tile" text="v-badges" size="12" />
    </div>
    <div class="mt-5">
    <span class="m-10" v-badges="data">My badges</span>
    <div class="flex align-center">
      <asw-input-box class="m-2" label="Show" type="checkbox" v-model="data.show"/>
      <asw-input-box class="m-2" label="Value" v-model="data.value"/>
      <asw-input-box class="m-2" label="Color" type="color" v-model="data.color"/>
      <asw-input-box class="m-2" label="Background Color" type="color" v-model="data.bgColor"/>
    </div>
    </div>
    <my-code :code="code" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: {
        value: 11,
        show: true,
        color: '#ffffff',
        bgColor: '#000000'
      },
      code: `
<span class="m-10" v-badges="data">My badges</span>
<div class="flex align-center">
  <asw-input-box class="m-2" label="Show" type="checkbox" v-model="data.show"/>
  <asw-input-box class="m-2" label="Value" v-model="data.value"/>
  <asw-input-box class="m-2" label="Color" type="color" v-model="data.color"/>
  <asw-input-box class="m-2" label="Background Color" type="color" v-model="data.bgColor"/>
</div>
data: {
  value: 11,
  show: true,
  color: '#ffffff',
  bgColor: '#000000'
}

        `
    }
  }
}
</script>

<style>

</style>
