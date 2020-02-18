import omitBy from './omit-by'

export default {
  value: () => expect({ foo: 1, bar: 2 } |> omitBy(value => value === 1)).toEqual({ bar: 2 }),
  key: () => expect({ foo: 1, bar: 2 } |> omitBy((value, key) => key === 'foo')).toEqual({ bar: 2 }),
}
