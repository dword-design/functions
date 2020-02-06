import { findKey } from '@dword-design/functions'

export default () => {
  expect({ foo: 1, bar: 2 } |> findKey(value => value === 1)).toEqual('foo')
  expect({ foo: 1, bar: 2 } |> findKey(value => value === 3)).toBeUndefined()
}
