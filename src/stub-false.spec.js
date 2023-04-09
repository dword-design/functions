import stubFalse from './stub-false.js'

export default {
  valid: () => expect(stubFalse()).toBeFalsy(),
}
