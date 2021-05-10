import pickBy from './pick-by'

export default {
  key: () =>
    expect({ bar: 2, foo: 1 } |> pickBy((value, key) => key === 'foo')).toEqual(
      { foo: 1 }
    ),
  value: () =>
    expect({ bar: 2, foo: 1 } |> pickBy(value => value === 1)).toEqual({
      foo: 1,
    }),
}
