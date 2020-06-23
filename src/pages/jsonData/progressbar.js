export default {
  code: `
<template>
  <div>
    <asw-progress-bar class="m-1" :max="max" :value="value" :label="value  +'% compleated remaining will take '+ (max - value)+ 'min'" :fill="fill" />
    <asw-progress-bar class="m-1" width="400px" :max="max" :value="value" :label="value + '%'" :fill="fill" />
    <asw-progress-bar class="m-1" width="400px" height="10px" :max="max" :value="value" :label="value + '%'" :fill="fill" />
    <asw-progress-bar class="m-1" width="100%" height="4px" :max="max" :value="value" :fill="fill" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      max: 100,
      value: 20,
      fill: '#dc3545',
      timeOut: ''
    }
  },
  methods: {
    update () {
      this.value += 10
      if (this.value > 100) {
        this.value = 0
      }
      if (this.value < 33) {
        this.fill = '#dc3545'
      } else if (this.value < 75) {
        this.fill = '#ffc107'
      } else {
        this.fill = '#28a745'
      }
    }
  },
  mounted () {
    this.timeOut = setInterval(this.update, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timeOut)
  }
}
</script>

  `
}
