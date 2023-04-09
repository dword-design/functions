import nullary from './nullary.js'

export default {
  valid: () => expect(nullary(x => x)(1)).toBeUndefined(),
}
