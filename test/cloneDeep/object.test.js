import { cloneDeep } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  const obj = { foo: 1, bar: 2 }
  const obj2 = obj |> cloneDeep
  obj2.foo = 2
  expect(obj).toEqual({ foo: 1, bar: 2 })
  expect(obj2).toEqual({ foo: 2, bar: 2 })
}
