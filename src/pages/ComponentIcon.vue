<template>
  <div>
    <h2>Asw Icon's</h2>
    <hr>
    <my-doc>
      <asw-icon-def/>
    </my-doc>
    <hr>
    <div class="flex justify-space-between">
      <h3>Icon List</h3>
      <asw-input-box v-model="search" />
    </div>
    <small v-if="search !== ''">{{getSearchText}}</small>
    <div class="flex">
      <div class="icon-card" v-for="i in getIcon" :key="i.id">
        <asw-icon-def :icon="i" />
        <b v-html="searchHighlight(i)"></b>
      </div>
    </div>
  </div>
</template>

<script>
import allIcon from '../asw-ele/components/IconsDef/icon-list'
const iconlist = Object.keys(allIcon)
export default {
  data: function () {
    return {
      search: ''
    }
  },
  methods: {
    searchHighlight (str) {
      str = str.replace(this.search, `<span class="search-high">${this.search}</span>`)
      return str
    }
  },
  computed: {
    getSearchText () {
      return `showing search ${this.getIcon.length} out of ${iconlist.length}`
    },
    getIcon () {
      var nIconList = iconlist.filter(x => x.indexOf(this.search.toLowerCase()) !== -1)
      return nIconList.map(x => `${x}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-card {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  b{
    display: block;
    padding: 5px;
  }
  .search-high {
      background: yellow;
    }
}

</style>
