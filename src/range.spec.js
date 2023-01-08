import range from './range.js'

export default {
  'no start': () => expect(range(4)).toEqual([0, 1, 2, 3]),
  start: () => expect(range(1, 4)).toEqual([1, 2, 3]),
  step: () => expect(range(1, 6, 2)).toEqual([1, 3, 5]),
}
