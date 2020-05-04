<template>
  <div class='resizable' draggable="false" :class="active ? 'activeClass' : ''" @mousedown="Activate" :style="getStyle" >
    <div class="dragable"><slot></slot></div>
    <div class='resizer top-left'></div>
    <div class='resizer top-right'></div>
    <div class='resizer bottom-left'></div>
    <div class='resizer bottom-right'></div>
  </div>
</template>
<script>
export default {
  props: ['box'],
  data: function () {
    return {
      active: false,
      parent: {},
      offset: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    getStyle () {
      return {
        top: this.box.y + 'px',
        left: this.box.x + 'px',
        width: this.box.w + 'px',
        height: this.box.h + 'px'
      }
    }
  },
  methods: {
    move (e) {
      const box = this.box
      const x = e.x - this.offset.x - this.parent.x
      if (x >= 0 && x <= this.parent.width - box.w) {
        box.x = x
      }
      const y = e.y - this.offset.y - this.parent.y
      if (y >= 0 && y <= this.parent.height - box.h) {
        box.y = y
      }
    },
    resize (e) {
      const currentResizer = e.target.classList[1]
      const box = this.box
      const parent = this.parent
      // mX, mY location of mouse wrt parent
      const mX = e.pageX - parent.x
      const mY = e.pageY - parent.y
      if (mX >= 0 && mY >= 0) {
        switch (currentResizer) {
          case 'bottom-right':
            box.w = (mX < parent.width) ? mX - box.x : box.w
            box.h = (mY < parent.height) ? mY - box.y : box.h
            break
          case 'bottom-left':
            box.h = (mY < parent.height) ? mY - box.y : box.h
            box.w = box.w - (mX - box.x)
            box.x = mX
            break
          case 'top-right':
            box.w = (mX < parent.width) ? mX - box.x : box.w
            box.h = box.h + (box.y - mY)
            box.y = mY
            break
          case 'top-left':
            box.w = box.w - (mX - box.x)
            box.h = box.h + (box.y - mY)
            box.x = mX
            box.y = mY
            break
        }
      }
    },
    stopResize () {
      window.removeEventListener('mousemove', this.resize)
    },
    stopMove () {
      window.removeEventListener('mousemove', this.move)
    },
    setParent () {
      this.parent = this.$el.parentNode.getBoundingClientRect()
    },
    dragActivate (e) {
      const box = this.box
      const parent = this.parent
      this.offset.x = e.x - parent.x - box.x
      this.offset.y = e.y - parent.y - box.y
      e.preventDefault()
      window.addEventListener('mousemove', this.move)
      window.addEventListener('mouseup', this.stopMove)
    },
    resizeActivate (e) {
      e.preventDefault()
      window.addEventListener('mousemove', this.resize)
      window.addEventListener('mouseup', this.stopResize)
    },
    Activate () {
      this.active = true
      const ele = this.$el.children
      this.setParent()
      const box = this.box
      const parent = this.parent
      // check if box is going outside the parent
      if (box.x + box.w > parent.width) {
        box.w = parent.width - box.x
      }
      if (box.y + box.h > parent.height) {
        box.h = parent.height - box.y
      }
      if (this.box.drag) {
        ele[0].addEventListener('mousedown', this.dragActivate)
      }
      // set resizable event//
      if (this.box.resize) {
        for (let i = 1; i < ele.length; i++) {
          ele[i].addEventListener('mousedown', this.resizeActivate)
        }
      }
    },
    dActivate () {
      this.active = false
      const ele = this.$el.children
      ele[0].removeEventListener('mousedown', this.dragActivate)
      for (let i = 1; i < ele.length; i++) {
        ele[i].removeEventListener('mousedown', this.resizeActivate)
      }
    }
  },
  mounted () {
    const self = this
    window.addEventListener('mousedown', function (e) {
      var a = e.target
      var els = []
      while (a) {
        els.unshift(a)
        a = a.parentNode
      }
      if (els.findIndex((i) => { return i === self.$el }) === -1) {
        self.dActivate()
      }
    })
  },
  beforeDestroy () {
    this.stopResize()
    this.stopMove()
    this.dActivate()
  }
}
</script>

<style>
.resizable {
  position: absolute;
  top: 100px;
  left: 100px;
}
.resizable .dragable {
  width: 100%;
  height: 100%;
  cursor: grabbing;
  overflow: auto;
}
.activeClass .dragable {
  border: 1px  dashed black;
}
.activeClass  .resizer{
  width: 10px;
  height: 10px;
  background: white;
  border: 1px solid black;
  position: absolute;
}
.activeClass  .resizer.top-left {
  left: -5px;
  top: -5px;
  cursor: nwse-resize; /*resizer cursor*/
}
.activeClass  .resizer.top-right {
  right: -5px;
  top: -5px;
  cursor: nesw-resize;
}
.activeClass  .resizer.bottom-left {
  left: -5px;
  bottom: -5px;
  cursor: nesw-resize;
}
.activeClass  .resizer.bottom-right {
  right: -5px;
  bottom: -5px;
  cursor: nwse-resize;
}
</style>
