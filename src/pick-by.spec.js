import pickBy from './pick-by'

export default {
  value: () =>
    expect({ foo: 1, bar: 2 } |> pickBy(value => value === 1)).toEqual({
      foo: 1,
    }),
  key: () =>
    expect(
      { foo: 1, bar: 2 } |> pickBy((value, key) => key === 'foo')
    ).toEqual({ foo: 1 }),
}
