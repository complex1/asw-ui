<template>
  <div>
    <h2>Asw Select Element's</h2>
    <hr>
    <my-doc>
      <asw-input-select :options='[]'/>
    </my-doc>
    <my-doc>
      <asw-input-radio  :options='[]'/>
    </my-doc>
    <doc-code v-for="(i,index) in docEle" :key="i.id" :data="i">
      <div v-if="index === 0" >
        <asw-input-select :options="['apple', 'mango', 'banana']"/>
        <asw-input-radio :options="['apple', 'mango', 'banana']"/>
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
          title: 'Select',
          code: '<asw-input-select option="[\'apple\', \'mango\', \'banana\']"/>\n<asw-input-radio :options="[\'apple\', \'mango\', \'banana\']"/>'
        }
      ]
    }
  }
}
</script>

<style>

</style>
