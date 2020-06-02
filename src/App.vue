<template>
  <div id="app">
    <nav></nav>
    <div class="container-fluid np light">
      <div class="row np nm">
        <div class="col-md-2 np">
          <h3>ELEMENTS</h3>
          <ul class="np nm">
            <li
              class="sidebar-option"
              v-for="(val, key) in option"
              :key="val.id"
              @click="comp = key"
            >{{val}}</li>
          </ul>
        </div>
        <div class="col-md-8 np" style="margin-bottom: 100px;">
          <component :is="comp" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Test: () => import('@/views/test.vue'),
    Button: () => import('@/views/button.vue'),
    Input: () => import('@/views/input.vue'),
    Select: () => import('@/views/select.vue'),
    Modal: () => import('@/views/modal.vue'),
    Elevation: () => import('@/views/elevation.vue'),
    Notification: () => import('@/views/Notification.vue'),
    AutoFill: () => import('@/views/autofill.vue'),
    JsonTree: () => import('@/views/jsonTree.vue'),
    Popover: () => import('@/views/popover.vue'),
    Avatar: () => import('@/views/avatar.vue'),
    Sparkline: () => import('@/views/sparkline.vue'),
    MoveBlock: () => import('@/views/moveblock.vue'),
    DragDrop: () => import('@/views/dragDrop.vue'),
    Popup: () => import('@/views/popup.vue'),
    Directive: () => import('@/views/directive.vue'),
    Navbar: () => import('@/views/navbar.vue'),
    Table: () => import('@/views/table.vue'),
    TextEditor: () => import('@/views/textEditor.vue'),
    Class: () => import('@/views/class.vue')
  },
  data: () => {
    return {
      comp: 'Class',
      option: {
        Button: 'Button',
        Input: 'Input',
        Select: 'Select',
        Modal: 'Modal',
        Elevation: 'Elevation',
        Notification: 'Notification',
        AutoFill: 'AUTO Fill',
        JsonTree: 'Json Tree',
        Popover: 'Popover',
        Avatar: 'Avatar',
        Sparkline: 'Sparkline',
        MoveBlock: 'Move Block',
        DragDrop: 'Drag Drop',
        Popup: 'Popup',
        Directive: 'Directive',
        Navbar: 'Navbar',
        Table: 'Table',
        TextEditor: 'Text Editor',
        Class: 'Class'
      }
    }
  }
}
</script>
<style lang="scss">
.CodeMirror {
  height: auto !important;
}
nav {
  height: 60px;
  background: #32333333;
}
.sidebar-option {
  text-align: left;
  text-decoration: none;
  list-style: none;
  padding: 5px 12px;
  border: 1px solid #d9d9d9;
  margin-right: 15px;
  background: #d9d9d966;
}
</style>
