import filter from './filter'

export default {
  array: () =>
    expect([1, 2, 3] |> filter(value => value !== 2)).toEqual([1, 3]),
  'object key filter': () =>
    expect(
      { bar: 2, baz: 3, foo: 1 } |> filter((value, key) => key !== 'bar')
    ).toEqual([3, 1]),
  'object value filter': () =>
    expect({ bar: 2, baz: 3, foo: 1 } |> filter(value => value !== 2)).toEqual([
      3,
      1,
    ]),
}
