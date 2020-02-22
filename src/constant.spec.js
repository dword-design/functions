import constant from './constant'

export default {
  valid: () => expect(constant(1)()).toEqual(1),
}