import map from './map'

export default {
  value: () => expect([1, 2, 3] |> map(value => value * 2)).toEqual([2, 4, 6]),
  key: () => expect([1, 2, 3] |> map((value, key) => key * 2)).toEqual([0, 2, 4]),
  property: () => expect([{ foo: 1 }, { foo: 2 }] |> map('foo')).toEqual([1, 2]),
  object: () => expect({ foo: 1, bar: 2 } |> map(value => value * 2)).toEqual([2, 4]),
}
