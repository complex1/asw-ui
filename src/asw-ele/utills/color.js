import colorVars from '@/asw-ele/scss/parent/_colors-vars.scss'

export const validHex = function (col) {
  return /^#[0-9A-F]{6,8}$/i.test(col)
}
export const validColor = function (col) {
  if (col in colorVars) {
    return colorVars[col]
  } else if (validHex(col)) {
    return col
  } else {
    return null
  }
}
