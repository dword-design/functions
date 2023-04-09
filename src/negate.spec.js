import negate from './negate.js'

export default {
  valid: () => expect(negate(x => x === 1)(1)).toBeFalsy(),
}
