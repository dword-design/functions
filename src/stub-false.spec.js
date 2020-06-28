import stubFalse from './stub-false'

export default {
  valid: () => expect(stubFalse()).toBeFalsy(),
}
