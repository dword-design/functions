import { every } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([1, 2, 3] |> every(x => x >= 1)).toBeTruthy()
  expect([1, 2, 3] |> every(x => x >= 2)).toBeFalsy()
  expect({ foo: 1, bar: 2, baz: 3 } |> every(x => x >= 1)).toBeTruthy()
  expect({ foo: 1, bar: 2, baz: 3 } |> every(x => x >= 1)).toBeTruthy()
}
