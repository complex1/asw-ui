<template>
  <div class='Application-Modal' >
      <div class='modal-titlebar'>
        <span>{{title}}</span>
      </div>
      <div class='modal-content' :style='getStyle'>
        <slot></slot>
      </div>
      <div class='modal-footbar'>
        <button class='asw-danger mx-1' @click="clicked('delete')" v-show='del'>DELETE</button>
        <button class='asw-danger mx-1' @click="clicked('cancel')" v-show='cancel' >CANCEL</button>
        <button class='asw-info mx-1' @click="clicked('add')" v-show='add'>ADD</button>
        <button class='asw-success mx-1' @click="clicked('save')" v-show='save' >SAVE</button>
        <button class='asw-success mx-1' @click="clicked('ok')" v-show='ok' >OK</button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'asw-form-modal',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    h: {
      type: String,
      default: '300px'
    },
    w: {
      type: String,
      default: '400px'
    },
    del: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: Boolean,
      default: false
    },
    add: {
      type: Boolean,
      default: false
    },
    save: {
      type: Boolean,
      default: false
    },
    ok: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicked (btn) {
      this.$emit(btn)
    }
  },
  computed: {
    getStyle () {
      return {
        height: this.h,
        width: this.w
      }
    }
  }
}
</script>
<style lang="scss">

.Application-Modal {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 0.5em;
  opacity: 1;
}
.Application-Modal .modal-titlebar {
  width: 100%;
  height: 33px;
  font-weight: bold;
  background: transparent linear-gradient(93deg, #efefef 0%, #efefef77 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 3px #00000029;
  border-radius: 0.5em 0.5em 0em 0em;
  padding: 5px;
  padding-left: 10px;
  border-bottom: 0.5px solid #736f6f;
}
.Application-Modal .modal-content{
  padding: 2px 10px;
  overflow: auto;
}
.Application-Modal .modal-footbar{
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  border-top: 0.5px solid#736f6f;
}
</style>
