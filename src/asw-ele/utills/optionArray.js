export const getOptionArray = function (options) {
  const arr = []
  if (Array.isArray(options)) {
    options.forEach(e => {
      if (typeof e !== 'object') {
        arr.push({
          label: e,
          value: e
        })
      } else {
        arr.push(e)
      }
    })
    return arr
  } else if (typeof options === 'object') {
    for (const i in options) {
      arr.push({
        label: options[i],
        value: i
      })
    }
    return arr
  }
  return arr
}
