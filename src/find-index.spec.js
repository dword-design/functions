import findIndex from './find-index.js';

const array = [
  { bar: 2, foo: 1 },
  { bar: 3, foo: 2 },
];

export default {
  false: () => expect(array |> findIndex({ baz: 1 })).toEqual(-1),
  function: () =>
    expect(array |> findIndex(element => element.foo === 1)).toEqual(0),
  property: () => expect(array |> findIndex({ foo: 1 })).toEqual(0),
};
