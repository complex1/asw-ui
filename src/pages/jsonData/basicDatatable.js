export default {
  code: `
  <template>
  <div>
    <div class="flex p-2">
      <asw-input-box v-model="search" class="mx-2" label="SEARCH" @change="pageNumber = 1"/>
      <asw-input-box type="number" class="mx-2" label="Page Number" v-model="pageNumber"/>
      <asw-input-select label="Per Page" class="mx-2" v-model="perPage" :options="[5,10,20,50, 'full']"/>
    </div>
    <asw-data-table class="dark" :data="data" :search="search" :perPage="perPage" :currentPage="pageNumber" @click="clicked" @filter="filter"/>
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
        perPage: 5,
        len: mockData.length
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
  
  `
}
