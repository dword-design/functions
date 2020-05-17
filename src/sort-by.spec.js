import sortBy from './sort-by'

export default {
  valid: () =>
    expect([{ foo: 2 }, { foo: 1 }] |> sortBy('foo')).toEqual([
      { foo: 1 },
      { foo: 2 },
    ]),
}
