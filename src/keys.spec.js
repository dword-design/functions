import keys from './keys'

export default {
  valid: () => expect({ bar: 2, foo: 1 } |> keys).toEqual(['bar', 'foo']),
}
