export default {
  title: 'Drag and Drop',
  about: 'It is use to transfer data from one element to other element using drag and drop',
  component: {
    about: `For draging data use data prop in <b>asw-drag</b> element take data that needed to be transfer
and when it is droped to any <b>asw-drop</b> element it emit an event <b>Drop</b> that gives one object having 3 property
<b>data</b>, <b>x</b> and <b>y</b>`,
    code: `
<template>
<div class="align j-sb m-4">
  <div class="option-list">
    <asw-drag data="C++" >
      <span>C++</span>
    </asw-drag>
    <asw-drag data="Java" >
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
    <asw-drop @Drop='drop' >
      <div class="drop-box">
        {{dropMsg}}
      </div>
    </asw-drop>
  </div>
</div>
</template>

<script>
export default {
data: () => {
  return {
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
    this.dropMsg = 'you have choosen ' + e.data
  }
}
}
</script>

<style>
.option-list span{
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
  
`
  }
}
