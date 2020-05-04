import $ from 'jquery'
import './jquery.sparkline'
const createChart = function (id, values, options) {
  $(`#${id}`).sparkline(values, options)
}
export default {
  createChart
}
