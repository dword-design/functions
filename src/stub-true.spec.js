import stubTrue from './stub-true.js'

export default {
  valid: () => expect(stubTrue()).toBeTruthy(),
}
