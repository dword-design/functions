import { findIndex } from '@dword-design/functions'

export default () => {
  const array = [{ foo: 1, bar: 2 }, { foo: 2, bar: 3 }]
  expect(array |> findIndex(({ foo }) => foo === 1)).toEqual(0)
  expect(array |> findIndex({ foo: 1 })).toEqual(0)
  expect(array |> findIndex({ baz: 1 })).toEqual(-1)
}
