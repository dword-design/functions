import unary from './unary'

export default {
  valid: () => expect(unary((x, y) => `${x}${y}`)(1, 2)).toEqual('1undefined'),
}
