import pick from './pick'

export default {
  valid: () =>
    expect({ foo: 1, bar: 2, baz: 3 } |> pick(['foo', 'bar'])).toEqual({
      foo: 1,
      bar: 2,
    }),
}
