import omit from './omit'

export default {
  single: () => expect({ foo: 1, bar: 2 } |> omit('foo')).toEqual({ bar: 2 }),
  multiple: () =>
    expect({ foo: 1, bar: 2, baz: 3 } |> omit(['foo', 'bar'])).toEqual({
      baz: 3,
    }),
}
