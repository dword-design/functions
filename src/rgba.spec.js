import rgba from './rgba'

export default {
  valid: () => expect(rgba('#ff0000', 0.5)).toEqual('rgba(255, 0, 0, 0.5)'),
}
