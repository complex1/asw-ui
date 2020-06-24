<template>
  <div id="app " class="asw">
    <div class="row">
      <div class="doc-sidebar col-2">
        <h4>Documents</h4>
        <a
          v-for="i in getDocList"
          :key="i.id"
          @click="selectedComp = i"
        >{{i.replace(/[A-Z]/g, (e) => ` ${e}`).trim().slice(0,-3)}}</a>
      </div>
      <div class="doc-container col-10">
        <component :is="selectedComp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => {
    return {
      selectedComp: ''
    }
  },
  computed: {
    getDocList () {
      return window.elementList
    }
  }
}
</script>

<style lang="scss">
.doc-sidebar {
  background: #f5f3f3;
  padding: 20px;
  height: 100vh;
  overflow: auto;
  a {
    display: block;
    padding: 5px 10px;
    background: #9a96962e;
    margin-right: -15px;
    margin-bottom: -1px;
    border: 1px solid #c1c1c1;
  }
}
.doc-container {
  padding: 10px 30px !important;
  margin: 10px auto;
  padding-bottom: 50px;
  height: 100vh;
  overflow: auto;
}
.css-class-chip {
  display: block;
  padding: 2px 10px;
  background: #f3f1ef;
  margin: 5px;
  border-radius: 8px;
}
</style>
