import reduce from './reduce.js';

export default {
  array: () =>
    expect([1, 2, 3] |> reduce((result, value) => result + value, 0)).toEqual(
      6,
    ),
  'object by key': () =>
    expect(
      { bar: 2, baz: 3, foo: 1 }
        |> reduce((result, value, key) => result + key, ''),
    ).toEqual('barbazfoo'),
  'object by value': () =>
    expect(
      { bar: 2, baz: 3, foo: 1 }
        |> reduce((result, value) => result + value, ''),
    ).toEqual('231'),
};
