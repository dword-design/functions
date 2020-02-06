import { map } from '@dword-design/functions'

export default () => {
  expect([1, 2, 3] |> map(value => value * 2)).toEqual([2, 4, 6])
  expect([1, 2, 3] |> map((value, key) => key * 2)).toEqual([0, 2, 4])
  expect([{ foo: 1 }, { foo: 2 }] |> map('foo')).toEqual([1, 2])
  expect({ foo: 1, bar: 2 } |> map(value => value * 2)).toEqual([2, 4])
}
