
import aswSparkLine from '../plugins/asw-sparkline'
export default {
  props: {
    data: {
      type: [Array, Object],
      default: function () {
        return {
          a: 1,
          b: 2,
          c: 3,
          d: 4
        }
      }
    },
    w: {
      type: String,
      default: '100%'
    },
    h: {
      type: String,
      default: '2rem'
    },
    color: {
      type: String,
      default: 'red'
    },
    fill: {
      type: String,
      default: 'pink'
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    tooltip: {
      type: Boolean,
      default: true
    },
    showPoint: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    getValue () {
      if (!Array.isArray(this.data)) {
        return Object.values(this.data)
      } else {
        return this.data
      }
    },
    getLabel () {
      if (!Array.isArray(this.data)) {
        return Object.keys(this.data)
      } else {
        return null
      }
    },
    getOptions () {
      const config = {
        width: this.w,
        height: this.h,
        lineColor: this.color,
        fillColor: this.fill,
        chartRangeMin: this.min,
        chartRangeMax: this.max,
        disableHiddenCheck: true,
        disableTooltips: !this.tooltip,
        disableHighlight: !this.showPoint
      }
      Object.assign(config, this.ChartConfig)
      return config
    },
    getId () {
      return `asw-sparkline-${this._uid}`
    }
  },
  mounted () {
    aswSparkLine.createChart(this.getId, this.getValue, this.getOptions)
  }
}
