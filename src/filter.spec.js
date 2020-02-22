import filter from './filter'

export default {
  array: () => expect([1, 2, 3] |> filter(value => value !== 2)).toEqual([1, 3]),
  'object value filter': () => expect({ foo: 1, bar: 2, baz: 3 } |> filter(value => value !== 2)).toEqual([1, 3]),
  'object key filter': () => expect({ foo: 1, bar: 2, baz: 3 } |> filter((value, key) => key !== 'bar')).toEqual([1, 3]),
}
