import fromPairs from './from-pairs'

export default {
  valid: () => expect([['foo', 1], ['bar', 2]] |> fromPairs).toEqual({ foo: 1, bar: 2 }),
}
