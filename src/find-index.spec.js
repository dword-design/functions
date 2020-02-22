import findIndex from './find-index'

const array = [{ foo: 1, bar: 2 }, { foo: 2, bar: 3 }]

export default {
  function: () => expect(array |> findIndex(({ foo }) => foo === 1)).toEqual(0),
  property: () => expect(array |> findIndex({ foo: 1 })).toEqual(0),
  false: () => expect(array |> findIndex({ baz: 1 })).toEqual(-1),
}
