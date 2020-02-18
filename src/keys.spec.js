import keys from './keys'

export default {
  valid: () => expect({ foo: 1, bar: 2 } |> keys).toEqual(['foo', 'bar']),
}
