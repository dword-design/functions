import { pickBy } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect({ foo: 1, bar: 2 } |> pickBy(value => value === 1)).toEqual({ foo: 1 })
  expect({ foo: 1, bar: 2 } |> pickBy((value, key) => key === 'foo')).toEqual({ foo: 1 })
}
