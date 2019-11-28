import { find } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  const array = [{ foo: 1, bar: 2 }, { foo: 2, bar: 3 }]
  expect(array |> find(({ foo }) => foo === 1)).toBe(array[0])
  expect(array |> find({ foo: 1 })).toBe(array[0])
  expect(array |> find({ baz: 1 })).toBeUndefined()
}
