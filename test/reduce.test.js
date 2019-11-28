import { reduce } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([1, 2, 3] |> reduce((result, value) => result + value, 0)).toEqual(6)
  expect({ foo: 1, bar: 2, baz: 3 } |> reduce((result, value) => result + value, '')).toEqual('123')
  expect({ foo: 1, bar: 2, baz: 3 } |> reduce((result, value, key) => result + key, '')).toEqual('undefinedundefinedundefined')
}
