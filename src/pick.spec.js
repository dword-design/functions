import pick from './pick.js'

export default {
  valid: () =>
    expect({ bar: 2, baz: 3, foo: 1 } |> pick(['foo', 'bar'])).toEqual({
      bar: 2,
      foo: 1,
    }),
}
