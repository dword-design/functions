import nullary from './nullary'

export default {
  valid: () => expect(nullary(x => x)(1)).toBeUndefined(),
}
