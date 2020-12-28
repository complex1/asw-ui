<template>
<div>
  <h2>Asw Data Table </h2>
  <hr>
  <my-doc v-if="showDoc">
    <asw-data-table/>
  </my-doc>
  <hr>
  <h3> Basic Data  table</h3>
  <div class="flex p-2">
    <asw-input-box v-model="search" class="mx-2" label="SEARCH" @change="pageNumber = 1"/>
    <asw-input-box type="number" class="mx-2" label="Page Number" v-model="pageNumber"/>
    <asw-input-select label="Per Page" class="mx-2" v-model="perPage" :options="[5,10,20,50, 'full']"/>
    <asw-pagination v-model="pageNumber" :pageCount="totalPage" />
  </div>
  <asw-data-table
    class="dark" :data="data"
    :search="search"
    :perPage="perPage"
    :currentPage="pageNumber"
    @click="clicked"
    @filter="filter"
    :header='header'
    />
  {{len}}
  <my-code :code="docData.code" />
</div>
</template>

<script>
import mockData from './jsonData/MOCK_DATA.json'
import docData from './jsonData/basicDatatable.js'
export default {
  data: function () {
    return {
      docData: docData,
      data: mockData,
      search: '',
      pageNumber: 1,
      perPage: 5,
      len: mockData.length,
      header: [
        {
          key: 'id',
          value: 'ID',
          width: '20%'
        },
        {
          key: 'first_name',
          value: 'First Name'
        },
        {
          key: 'email',
          value: 'Email',
          width: '20%',
          style: {
            background: 'red'
          }
        }
      ]
    }
  },
  computed: {
    totalPage () {
      return parseInt(this.len / this.perPage) + ((this.len % this.perPage > 0))
    }
  },
  methods: {
    clicked (e) {
      alert(JSON.stringify(e))
    },
    filter (l) {
      this.len = l
    }
  }
}
</script>

<style>

</style>
