import negate from './negate'

export default {
  valid: () => expect(negate(x => x === 1)(1)).toBeFalsy(),
}
