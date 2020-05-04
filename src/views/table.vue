<template>
<div>
  <asw-input-text v-model="search" @change="pageNumber = 1"/>
  <asw-input-number v-model="pageNumber"/>
  <asw-data-table :data="data" :search="search" :currentPage="pageNumber" @click="clicked" @filter="filter"/>
  {{len}}
</div>
</template>

<script>
import mockData from './jsonData/MOCK_DATA.json'
export default {
  data: function () {
    return {
      data: mockData,
      search: '',
      pageNumber: 1,
      len: mockData.length
    }
  },
  methods: {
    clicked (e) {
      console.log(e)
    },
    filter (l) {
      this.len = l
    }
  }
}
</script>

<style>

</style>
