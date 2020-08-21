<template>
  <div :id='id' class="my-drag-resize-ele" draggable="false" @click="$emit('click')" :class="active ? 'activeClass' : ''" @mousedown="Activate" :style="getStyle">
    <div class="resizerContainer" ref="resizer" v-show="active" >
      <div class='resizer top-left' :style="resizerTopLeft"></div>
      <div class='resizer top-right' :style="resizerTopRight" ></div>
      <div class='resizer bottom-left' :style="resizerBottomLeft"></div>
      <div class='resizer bottom-right' :style="resizerBottomright"></div>
      <div class="dimension-width" v-if="showDimension" >{{box.w.toFixed(2) + '%'}}</div>
      <div class="dimension-height" v-if="showDimension" :style="{top: `${getBoxInPx().h/2 - 20}px`}" >{{box.h.toFixed(2) + '%'}}</div>
    </div>
    <div class="box-left-hight-cover" :style="leftVerticalLine"  v-if="active&&showDimension"></div>
    <div class="box-top-width-cover" :style="topHorizontalLine"  v-if="active&&showDimension"></div>
    <div class="box-right-hight-cover" :style="rightVerticalLine"  v-if="active&&showDimension"></div>
    <div class="box-bottom-width-cover" :style="bottomHorizontalLine"  v-if="active&&showDimension"></div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'asw-drag-resize',
  props: {
    showDimension: {
      type: Boolean,
      default: false
    },
    box: {
      type: Object,
      default: function () {
        return {
          x: 10,
          y: 10,
          z: 10,
          h: 25,
          w: 25,
          drag: true,
          resize: true
        }
      }
    }
  },
  data: () => {
    return {
      currentResizer: '',
      active: false,
      parent: {
        height: 0,
        width: 0,
        x: 0,
        y: 0
      },
      offset: {
        x: 0,
        y: 0
      }
    }
  },
  computed: {
    id () {
      return 'drag_resiz_' + this._uid
    },
    resizerTopLeft () {
      return {
        top: '-5px',
        left: '-5px'
      }
    },
    resizerTopRight () {
      return {
        top: '-5px',
        right: '-5px'
      }
    },
    resizerBottomLeft () {
      const height = (this.parent.height * this.box.h) / 100 + 5
      return {
        bottom: `-${height}px`,
        left: '-5px'
      }
    },
    resizerBottomright () {
      const height = (this.parent.height * this.box.h) / 100 + 5
      return {
        bottom: `-${height}px`,
        right: '-5px'
      }
    },
    leftVerticalLine () {
      return {
        height: this.parent.height + 'px',
        top: -(this.parent.height * this.box.y) / 100 + 'px'
      }
    },
    topHorizontalLine () {
      return {
        width: this.parent.width + 'px',
        left: -(this.parent.width * this.box.x) / 100 + 'px'
      }
    },
    rightVerticalLine () {
      return {
        ...this.leftVerticalLine,
        left: '100%'
      }
    },
    bottomHorizontalLine () {
      return {
        ...this.topHorizontalLine,
        top: (this.parent.height * this.box.h) / 100 + 'px'
      }
    },
    getStyle () {
      return {
        top: this.box.y + '%',
        left: this.box.x + '%',
        width: this.box.w + '%',
        height: this.box.h + '%',
        zIndex: this.box.z
      }
    }
  },
  methods: {
    getBoxInPx () {
      return {
        x: (this.parent.width * this.box.x) / 100,
        y: (this.parent.height * this.box.y) / 100,
        w: (this.parent.width * this.box.w) / 100,
        h: (this.parent.height * this.box.h) / 100
      }
    },
    setBoxPar (box) {
      this.box.x = (box.x * 100) / (this.parent.width)
      this.box.y = (box.y * 100) / (this.parent.height)
      this.box.w = (box.w * 100) / (this.parent.width)
      this.box.h = (box.h * 100) / (this.parent.height)
    },
    move (e) {
      const box = this.getBoxInPx()
      const x = e.x - this.offset.x - this.parent.x
      if (x >= 0 && x <= this.parent.width - box.w) {
        box.x = x
      }
      const y = e.y - this.offset.y - this.parent.y
      if (y >= 0 && y <= this.parent.height - box.h) {
        box.y = y
      }
      this.setBoxPar(box)
    },
    resize (e) {
      const currentResizer = this.currentResizer
      const box = this.getBoxInPx()
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
      this.setBoxPar(box)
    },
    stopMove () {
      window.removeEventListener('mousemove', this.move)
    },
    stopResize () {
      window.removeEventListener('mousemove', this.resize)
    },
    dragActivate (e) {
      e.preventDefault()
      const box = this.getBoxInPx()
      const parent = this.parent
      this.offset.x = e.x - parent.x - box.x
      this.offset.y = e.y - parent.y - box.y
      window.addEventListener('mousemove', this.move)
      window.addEventListener('mouseup', this.stopMove)
    },
    resizeActivate (e) {
      e.stopPropagation()
      this.currentResizer = e.target.classList[1]
      window.addEventListener('mousemove', this.resize)
      window.addEventListener('mouseup', this.stopResize)
    },
    Activate (e) {
      e.stopPropagation()
      this.active = true
      const ele = this.$el
      const parent = this.$el.parentNode.getBoundingClientRect()
      this.parent.height = parent.height
      this.parent.width = parent.width
      this.parent.x = parent.x
      this.parent.y = parent.y
      if (this.box.drag) {
        ele.addEventListener('mousedown', this.dragActivate)
      }
      if (this.box.resize) {
        const resizers = this.$refs.resizer.children
        for (let i = 0; i < 4; i++) {
          resizers[i].addEventListener('mousedown', this.resizeActivate)
        }
      }
    },
    clickOutside (e) {
      var a = e.target
      var els = []
      var self = this
      while (a) {
        els.unshift(a)
        a = a.parentNode
      }
      if (els.findIndex((i) => { return i === self.$el }) === -1) {
        self.dActivate()
      }
    },
    dActivate () {
      this.active = false
      const ele = this.$el
      ele.removeEventListener('mousedown', this.dragActivate)
      const resizers = this.$refs.resizer.children
      for (let i = 0; i < 4; i++) {
        resizers[i].removeEventListener('mousedown', this.resizeActivate)
      }
    }
  },
  mounted () {
    window.addEventListener('mousedown', this.clickOutside)
  },
  beforeDestroy () {
    this.stopResize()
    this.stopMove()
    this.dActivate()
    try {
      window.removeEventListener('mousedown', this.clickOutside)
    } catch {}
  }
}
</script>
<style lang="scss" scoped>
.my-drag-resize-ele {
  position: absolute;
}
.resizerContainer {
  position: relative;
}
.resizer {
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 2px;
  background: white;
  border: 1px solid #9a9a9a;
  z-index: 100;
  display: none;
}
.activeClass {
  border: 1px  dashed black;
}
.activeClass .resizer{
  display: block;
}
.resizer.bottom-right,.top-left {
  cursor: nwse-resize;
}
.resizer.top-right, .bottom-left {
  cursor: nesw-resize;
}
.activeClass .dimension-width {
  position: absolute;
  top: -14px;
  left: calc( 50% - 25px);
  color: red;
  font-family: sans-serif;
  font-size: 12px;
}
.activeClass .dimension-height {
  position: absolute;
  left: -15px;
  color: red;
  font-family: sans-serif;
  font-size: 12px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
.box-left-hight-cover, .box-right-hight-cover {
  position: absolute;
  border: 1px dashed #ff0303;
  margin-left: -1px;
}
.box-top-width-cover, .box-bottom-width-cover {
  position: absolute;
  border: 1px dashed #ff0303;
  margin-bottom: -1px;
}
</style>
