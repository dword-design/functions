import tinycolor from 'tinycolor2';

export default (color, alpha) =>
  tinycolor(color)
    .setAlpha(alpha === undefined ? 1 : alpha)
    .toString();
