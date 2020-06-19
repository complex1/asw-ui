<template>
  <div class="my-pophover">
    <div @click="togglePopover" id="" class="option-box">
      <slot name="title"/>
    </div>
    <div v-if="show" class="pophover-box asw-ele-1" :style="popBoxStyle" >
        <slot name="option" />
    </div>
    <div v-if="show" class="box-arrow " :class="boxArrow" :style="popArrowStyle"></div>
  </div>
</template>

<script>
// TODO: left popover not working
export default {
  props: {
    pos: {
      type: String,
      default: 'right'
    }
  },
  data: function () {
    return {
      parentWidth: '',
      show: false,
      box: [],
      popBoxStyle: {
        top: '0px',
        left: '0px',
        right: undefined,
        bottom: undefined
      },
      popArrowStyle: {
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px'
      }
    }
  },
  methods: {
    togglePopover (e) {
      const box = this.box
      if (this.pos === 'right') {
        this.popArrowStyle.top = 10 + 'px'
        this.popArrowStyle.left = box.width + 10 + 'px'
        this.popArrowStyle.right = undefined
        this.popArrowStyle.bottom = undefined
        this.popBoxStyle.top = -5 + 'px'
        this.popBoxStyle.left = box.width + 15 + 'px'
        this.popBoxStyle.right = undefined
        this.popBoxStyle.bottom = undefined
      } else if (this.pos === 'left') {
        this.popArrowStyle.top = 10 + 'px'
        this.popArrowStyle.left = -15 + 'px'
        this.popArrowStyle.right = undefined
        this.popArrowStyle.bottom = undefined
        this.popBoxStyle.top = -5 + 'px'
        this.popBoxStyle.right = this.parentWidth + 10 + 'px'
        this.popBoxStyle.left = undefined
        this.popBoxStyle.bottom = undefined
      } else if (this.pos === 'top') {
        this.popArrowStyle.top = undefined
        this.popArrowStyle.left = 0 + 'px'
        this.popArrowStyle.right = undefined
        this.popArrowStyle.bottom = box.height + 'px'
        this.popBoxStyle.top = undefined
        this.popBoxStyle.left = -5 + 'px'
        this.popBoxStyle.right = undefined
        this.popBoxStyle.bottom = box.height + 5 + 'px'
      } else if (this.pos === 'bottom') {
        this.popArrowStyle.top = box.height + 5 + 'px'
        this.popArrowStyle.left = 0 + 'px'
        this.popArrowStyle.right = undefined
        this.popArrowStyle.bottom = undefined
        this.popBoxStyle.top = box.height + 10 + 'px'
        this.popBoxStyle.left = -5 + 'px'
        this.popBoxStyle.right = undefined
        this.popBoxStyle.bottom = undefined
      } else if (this.pos === 'right-up') {
        this.popArrowStyle.top = 10 + 'px'
        this.popArrowStyle.left = box.width + 5 + 'px'
        this.popArrowStyle.right = undefined
        this.popArrowStyle.bottom = undefined
        this.popBoxStyle.top = undefined
        this.popBoxStyle.left = box.width + 10 + 'px'
        this.popBoxStyle.right = undefined
        this.popBoxStyle.bottom = -5 + 'px'
      }
      this.show = !this.show
    },
    mouseClicked (e) {
      var a = e.target
      var els = []
      while (a) {
        els.unshift(a)
        a = a.parentNode
      }
      const self = this
      if (els.findIndex((i) => { return i === self.$el }) === -1) {
        this.show = false
      }
    }
  },
  computed: {
    boxArrow () {
      const dir = this.pos
      if (dir === 'left') {
        return 'left-box-arrow'
      } else if (dir === 'top') {
        return 'top-box-arrow'
      } else if (dir === 'bottom') {
        return 'bottom-box-arrow'
      } else {
        return 'right-box-arrow'
      }
    }
  },
  watch: {
    show (val) {
      if (val === true) {
        window.addEventListener('mousedown', this.mouseClicked)
      } else {
        window.removeEventListener('mousedown', this.mouseClicked)
      }
    }
  },
  mounted () {
    this.parentWidth = this.$el.getBoundingClientRect().width
    this.box = this.$el.children[0].getBoundingClientRect()
    console.log(this.parentWidth)
  }
}
</script>

<style>
.my-pophover {
  position: relative;
}
.my-pophover .option-box {
  cursor: default;
  width: fit-content;
  /* position: relative; */
}
.my-pophover .pophover-box {
  border-radius: 4px;
  background-color: #FFFFFF;
  color: rgba(0, 0, 0, 0.87);
  transform-origin: left top;
  z-index: 99999;
  position: absolute;
  display: inline-block;
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: auto;
  contain: content;
  will-change: transform;
  border: 1px solid #d6d6d6;
  padding: 8px;
}
.my-pophover .box-arrow {
  height: 10px;
  width: 10px;
  position: absolute;
  background: #ffffff;
  z-index: 99999;
  transform: rotate(45deg)
}
.left-box-arrow {
  border-top: 1px solid #d6d6d6;
  border-left: 0px solid #d6d6d6;
  border-right: 1px solid #d6d6d6;
  border-bottom: 0px solid #d6d6d6;
}
.right-box-arrow {
  border-top: 0px solid #d6d6d6;
  border-left: 1px solid #d6d6d6;
  border-right: 0px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
}
.top-box-arrow {
  border-top: 0px solid #d6d6d6;
  border-left: 0px solid #d6d6d6;
  border-right: 1px solid #d6d6d6;
  border-bottom: 1px solid #d6d6d6;
}
.bottom-box-arrow {
  border-top: 1px solid #d6d6d6;
  border-left: 1px solid #d6d6d6;
  border-right: 0px solid #d6d6d6;
  border-bottom: 0px solid #d6d6d6;
}
</style>
