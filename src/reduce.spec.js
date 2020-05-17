import reduce from './reduce'

export default {
  array: () =>
    expect([1, 2, 3] |> reduce((result, value) => result + value, 0)).toEqual(
      6
    ),
  'object by value': () =>
    expect(
      { foo: 1, bar: 2, baz: 3 }
        |> reduce((result, value) => result + value, '')
    ).toEqual('123'),
  'object by key': () =>
    expect(
      { foo: 1, bar: 2, baz: 3 }
        |> reduce((result, value, key) => result + key, '')
    ).toEqual('foobarbaz'),
}
