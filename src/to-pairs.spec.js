import toPairs from './to-pairs'

export default {
  valid: () => expect({ foo: 1, bar: 2 } |> toPairs).toEqual([['foo', 1], ['bar', 2]]),
}
