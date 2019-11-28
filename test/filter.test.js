import { filter } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([1, 2, 3] |> filter(value => value !== 2)).toEqual([1, 3])
  expect({ foo: 1, bar: 2, baz: 3 } |> filter(value => value !== 2)).toEqual([1, 3])
  expect({ foo: 1, bar: 2, baz: 3 } |> filter((value, key) => key !== 'bar')).toEqual([1, 3])
}
