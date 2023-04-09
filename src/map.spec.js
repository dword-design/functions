import map from './map.js'

export default {
  key: () =>
    expect([1, 2, 3] |> map((value, key) => key * 2)).toEqual([0, 2, 4]),
  object: () =>
    expect({ bar: 2, foo: 1 } |> map(value => value * 2)).toEqual([4, 2]),
  property: () =>
    expect([{ foo: 1 }, { foo: 2 }] |> map('foo')).toEqual([1, 2]),
  value: () => expect([1, 2, 3] |> map(value => value * 2)).toEqual([2, 4, 6]),
}
