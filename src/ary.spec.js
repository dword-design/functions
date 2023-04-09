import ary from './ary.js'

export default {
  valid: () =>
    expect(ary((x, y, z) => `${x}${y}${z}`, 2)(1, 2)).toEqual('12undefined'),
}
