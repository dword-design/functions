import times from './times.js'

export default {
  valid: () => expect(times(4, x => x)).toEqual([0, 1, 2, 3]),
}
