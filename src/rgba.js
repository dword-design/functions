import tinycolor from 'tinycolor2'

export default (color, alpha) =>
  tinycolor(color)
    .setAlpha(alpha !== undefined ? alpha : 1)
    .toString()
