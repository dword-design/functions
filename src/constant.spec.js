import constant from './constant.js'

export default {
  valid: () => expect(constant(1)()).toEqual(1),
}
