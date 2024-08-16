import omit from './omit.js';

export default {
  multiple: () =>
    expect({ bar: 2, baz: 3, foo: 1 } |> omit(['foo', 'bar'])).toEqual({
      baz: 3,
    }),
  single: () => expect({ bar: 2, foo: 1 } |> omit('foo')).toEqual({ bar: 2 }),
};
