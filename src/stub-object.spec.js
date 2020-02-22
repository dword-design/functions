import stubObject from './stub-object'

export default {
  valid: () => expect(stubObject()).toEqual({}),
}
