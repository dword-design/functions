import pick from './pick'

export default {
  valid: () =>
    expect({ bar: 2, baz: 3, foo: 1 } |> pick(['foo', 'bar'])).toEqual({
      bar: 2,
      foo: 1,
    }),
}
