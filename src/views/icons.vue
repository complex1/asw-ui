<template>
  <div>
    <h3>Icons</h3>
    <input v-model="search" placeholder="filter">
    <div class="align fl">
      <div v-for="i in getIcon"   :key="i.id" class="ta-c m-2" style="width: 110px">
        <i :class="i"></i>
        <div>
          <small v-html="searchHighlight(i)"></small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconlist from './jsonData/iconList'
export default {
  data: function () {
    return {
      search: ''
    }
  },
  methods: {
    searchHighlight (str) {
      str = str.slice(8)
      str = str.replace(this.search, `<span class="search-high">${this.search}</span>`)
      return str
    }
  },
  computed: {
    getIcon () {
      var nIconList = iconlist.filter(x => x.indexOf(this.search.toLowerCase()) !== -1)
      return nIconList.map(x => `asw ${x}`)
    }
  }
}
</script>

<style>
.search-high {
  background: yellow;
}
</style>
