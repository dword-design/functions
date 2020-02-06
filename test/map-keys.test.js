import { mapKeys } from '@dword-design/functions'

export default () => {
  expect({ foo: 1, bar: 2 } |> mapKeys((value, key) => `${key}x`)).toEqual({ foox: 1, barx: 2 })
  expect({ foo: 1, bar: 2 } |> mapKeys(value => `key${value}`)).toEqual({ key1: 1, key2: 2 })
}
