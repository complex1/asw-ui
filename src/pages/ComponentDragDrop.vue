<template>
<div>
  <h2>Drag Element</h2>
     <my-doc>
      <asw-drag/>
    </my-doc>
    <h2>Drop Element</h2>
     <my-doc>
      <asw-drop/>
    </my-doc>
  <doc-code  :data="{code: code}">
    <section class="ex flex justify-space-between bg-default">
      <div>
        <asw-drag class="dragEle" dragkey="java" data="Java" >Java</asw-drag>
        <asw-drag class="dragEle" dragkey="python" data="Java" >Python</asw-drag>
        <asw-drag class="dragEle" dragkey="c++"  data="Java" >C++</asw-drag>
        <asw-drag class="dragEle" data="Java" >Javascript</asw-drag>
      </div>
      <asw-drop class="dropEle" :dropkey="['java','python','c++']" @Drop="drop"/>
    </section>
  </doc-code>
</div>
</template>

<script>
export default {
  data: () => {
    return {
      code: `
<section class="ex flex justify-space-between bg-default">
  <div>
    <asw-drag class="dragEle" dragkey="java" data="Java" >Java</asw-drag>
    <asw-drag class="dragEle" dragkey="python" data="Java" >Python</asw-drag>
    <asw-drag class="dragEle" dragkey="c++"  data="Java" >C++</asw-drag>
    <asw-drag class="dragEle" data="Java" >Javascript</asw-drag>
  </div>
  <asw-drop class="dropEle" :dropkey="['java','python','c++']" @Drop="drop"/>
</section>     
drop (e) {
      alert(JSON.stringify(e))
    } 
`
    }
  },
  methods: {
    drop (e) {
      alert(JSON.stringify(e))
    }
  }
}
</script>

<style lang="scss" scoped>
.ex {
  background: lightgray;
  padding: 30px;
  margin: 20px;
  align-items: center;
}
.dragEle {
  padding: 5px 10px;
  background: lightgreen;
  border: 1px solid greenyellow;
}
.dropEle {
  height: 200px;
  width: 200px;
  border: 1px solid greenyellow;
  background: white;
}
</style>
