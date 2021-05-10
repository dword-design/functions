import omitBy from './omit-by'

export default {
  key: () =>
    expect({ bar: 2, foo: 1 } |> omitBy((value, key) => key === 'foo')).toEqual(
      { bar: 2 }
    ),
  value: () =>
    expect({ bar: 2, foo: 1 } |> omitBy(value => value === 1)).toEqual({
      bar: 2,
    }),
}
