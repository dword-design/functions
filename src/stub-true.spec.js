import stubTrue from './stub-true'

export default {
  valid: () => expect(stubTrue()).toBeTruthy(),
}
