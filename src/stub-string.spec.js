import stubString from './stub-string'

export default {
  valid: () => expect(stubString()).toEqual(''),
}
