import keys from './keys.js'

export default {
  valid: () => expect({ bar: 2, foo: 1 } |> keys).toEqual(['bar', 'foo']),
}
