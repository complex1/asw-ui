<template>
  <div>
    <h2>Asw input Element's</h2>
    <hr>
    <my-doc>
      <asw-input-box/>
    </my-doc>
    <doc-code v-for="(i,index) in docEle" :key="i.id" :data="i">
      <div v-if="index === 0" >
        <asw-input-box v-model="data1" class="xs m-1"/>
        <asw-input-box v-model="data1" class="s m-1"/>
        <asw-input-box v-model="data1" class="m m-1"/>
        <asw-input-box v-model="data1" class="l m-1"/>
        <asw-input-box v-model="data1" class="xl m-1"/>
        <asw-input-box v-model="data1" class="xxl m-1"/>
        {{data1}}
      </div>
      <div v-if="index === 1">
        <asw-input-box class="danger m-1"/>
        <asw-input-box class="success m-1" color="#ef5350"/>
        <asw-input-box class=" m-1" width="400px"/>
      </div>
      <div v-if="index === 2">
        <asw-input-box type="text" class="m-1"/>
        <asw-input-box type="number" class="m-1"/>
        <asw-input-box type="password" class="m-1"/>
        <asw-input-box type="color" class="m-1"/>
        <asw-input-box type="date" class="m-1"/>
        <asw-input-box type="time" class="m-1"/>
        <asw-input-box type="file" class="m-1"/>
        <asw-input-box type="checkbox" class="m-1"/>
      </div>
      <div v-if="index === 3">
        <asw-input-box label="Lable" sublabel="dce" :msg="{message: 'correct password', variant: 'success'}"/>
        <br>
        <asw-input-box label="Lable" sublabel="dce" :block="true" :msg="{message: 'correct password', variant: 'success'}"/>
      </div>
    </doc-code>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data1: '',
      docEle: [
        {
          title: 'Input Element',
          about: 'size',
          code: `
<asw-input-box v-model="data1" class="xs m-1"/>
<asw-input-box v-model="data1" class="s m-1"/>
<asw-input-box v-model="data1" class="m m-1"/>
<asw-input-box v-model="data1" class="l m-1"/>
<asw-input-box v-model="data1" class="xl m-1"/>
<asw-input-box v-model="data1" class="xxl m-1"/>
{{data1}}
          `
        },
        {
          title: 'Input Element',
          about: 'size',
          code: `
<asw-input-box class="danger m-1"/>
<asw-input-box class="success m-1" color="#ef5350"/>
<asw-input-box class=" m-1" width="400px"/>
          `
        },
        {
          title: 'Input Types',
          code: `
<asw-input-box type="text" class="m-1"/>
<asw-input-box type="number" class="m-1"/>
<asw-input-box type="password" class="m-1"/>
<asw-input-box type="color" class="m-1"/>
<asw-input-box type="date" class="m-1"/>
<asw-input-box type="time" class="m-1"/>
<asw-input-box type="file" class="m-1"/>
<asw-input-box type="checkbox" class="m-1"/>

          `
        },
        {
          title: 'Input with label',
          about: '',
          code: `
<asw-input-box 
  label="Lable"
  sublabel="dce"
  :msg="{message: 'correct password', variant: 'success'}"
/>
<br>
<asw-input-box
  label="Lable"
  sublabel="dce"
  :block="true"
  :msg="{message: 'correct password', variant: 'success'}"
/>
          `
        }
      ]
    }
  }
}
</script>

<style>

</style>
