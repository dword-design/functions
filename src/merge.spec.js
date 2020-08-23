import merge from './merge'

export default {
  array: () =>
    expect({ foo: 1 } |> merge([{ bar: 2 }, { baz: 3 }])).toEqual({
      0: { bar: 2 },
      1: { baz: 3 },
      foo: 1,
    }),
  'different properties': () =>
    expect({ foo: 1 } |> merge({ bar: 2 })).toEqual({ bar: 2, foo: 1 }),
  'multiple merges': () =>
    expect({ foo: 1 } |> merge({ foo: 2 }, { bar: 3 })).toEqual({
      bar: 3,
      foo: 2,
    }),
  nested: () =>
    expect({ foo: { bar: 2 } } |> merge({ foo: { baz: 3 } })).toEqual({
      foo: { bar: 2, baz: 3 },
    }),
  'same property': () =>
    expect({ foo: 1 } |> merge({ foo: 2 })).toEqual({ foo: 2 }),
}
