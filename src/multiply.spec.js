import multiply from './multiply'

export default {
  valid: () => expect(3 |> multiply(3)).toEqual(9),
}
