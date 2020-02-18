import stubArray from './stub-array'

export default {
  valid: () => expect(stubArray()).toEqual([]),
}
