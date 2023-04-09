import values from './values.js'

export default {
  valid: () => expect({ bar: 2, foo: 1 } |> values).toEqual([2, 1]),
}
