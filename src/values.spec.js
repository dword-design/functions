import values from './values'

export default {
  valid: () => expect({ foo: 1, bar: 2 } |> values).toEqual([1, 2]),
}
