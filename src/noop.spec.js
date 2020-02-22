import noop from './noop'

export default {
  valid: () => expect(noop()).toBeUndefined(),
}
