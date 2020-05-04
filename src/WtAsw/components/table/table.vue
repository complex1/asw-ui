<template>
  <table class="asw-data-table full-width fl border-h border-v light">
    <thead>
      <tr>
        <th v-for="i in GetHeaderValue" :key="i.id">
          {{i}}
          <span class="f-r sort-icon" @click="sortData(i, -1)">&#x2193;</span>
          <span class="f-r sort-icon" @click="sortData(i, 1)">&#x2191;</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in GetFilteredData" :key="i.id">
        <td v-for="j in GetHeaderKey" :key="j.id" @click="clicked(i,j)" v-html="i[j]"></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    data: {
      default: []
    },
    search: {
      default: ''
    },
    searchKeys: {
      type: Array,
      default: () => []
    },
    perPage: {
      type: [String, Number],
      default: 5
    },
    currentPage: {
      type: [String, Number],
      default: 1
    },
    sort: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    clicked (row, col) {
      this.$emit('click', {
        row: row,
        column: col
      })
    },
    isFind (obj) {
      const searchKeys = this.GetSearchKeys
      for (const i in searchKeys) {
        const key = searchKeys[i]
        const value = String(obj[key])
        if (value.toLowerCase().indexOf(this.search.toLowerCase()) !== -1) {
          return true
        }
      }
      return false
    },

    SearchFilter (data) {
      const searchFiltered = []
      for (const i in data) {
        if (this.isFind(data[i])) {
          searchFiltered.push(data[i])
        }
      }
      this.$emit('filter', searchFiltered.length)
      return searchFiltered
    },
    PageNumberFilter (data) {
      if (this.perPage === 'full') {
        return data
      } else {
        const filteredData = []
        const len = data.length
        const start = this.perPage * (this.currentPage - 1)
        const limit = Math.min(len, (this.perPage * this.currentPage))
        for (let i = start; i < limit; i++) {
          filteredData.push(data[i])
        }
        return filteredData
      }
    },
    sortData (value, dir) {
      const key = this.GetHeaderKey[this.GetHeaderValue.indexOf(value)]
      this.data.sort(function (a, b) {
        if (a[key] < b[key]) { return -1 * dir }
        if (a[key] > b[key]) { return 1 * dir }
        return 0
      })
    }
  },
  computed: {
    GetFilteredData () {
      let filteredData = this.data
      filteredData = this.SearchFilter(filteredData)
      filteredData = this.PageNumberFilter(filteredData)
      return filteredData
    },
    GetSearchKeys () {
      if (this.searchKeys.length === 0) {
        return this.GetHeaderKey
      } else {
        return this.searchKeys
      }
    },
    GetHeaderValue () {
      return Object.keys(this.data[0])
    },
    GetHeaderKey () {
      return Object.keys(this.data[0])
    }
  },
  watch: {
    search () {
    }
  }
}
</script>
