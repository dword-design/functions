import { omitBy } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect({ foo: 1, bar: 2 } |> omitBy(value => value === 1)).toEqual({ bar: 2 })
  expect({ foo: 1, bar: 2 } |> omitBy((value, key) => key === 'foo')).toEqual({ bar: 2 })
}
