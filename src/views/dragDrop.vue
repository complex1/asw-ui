<template>
  <div>
    <h2>{{data.title}}</h2>
    <p>{{data.about}}</p>
    <documentation :data="data.component" :component="true">
      <div class="align j-sb m-4">
        <div class="option-list">
          <asw-drag data="C++">
            <span>C++</span>
          </asw-drag>
          <asw-drag data="Java">
            <span>Java</span>
          </asw-drag>
          <asw-drag data="Python">
            <span>Python</span>
          </asw-drag>
          <asw-drag data="Node js">
            <span>Node js</span>
          </asw-drag>
        </div>
        <div>
          <asw-drop @Drop="drop">
            <div class="drop-box">{{dropMsg}}</div>
          </asw-drop>
        </div>
      </div>
    </documentation>
  </div>
</template>

<script>
import data from './jsonData/dragDrop'
export default {
  data: () => {
    return {
      data: data,
      dropMsg: 'drop your option'
    }
  },
  methods: {
    drop (e) {
      this.$OpenNotification({
        title: 'you have choosen ' + e.data,
        text: 'transferred data is ' + JSON.stringify(e),
        type: 'info'
      })
      this.dropMsg = `you have choosen ${e.data}`
    }
  }
}
</script>

<style>
.option-list span {
  background: #e0e0e066;
  width: 200px;
  display: block;
  padding: 10px;
  border: 1px solid #80808057;
}
.drop-box {
  height: 150px;
  width: 150px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: lightgreen;
}
</style>
