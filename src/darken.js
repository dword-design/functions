import tinycolor from 'tinycolor2';

export default (color, amount) => tinycolor(color).darken(amount).toString();
