import { pickBy } from '@dword-design/functions'

export default () => {
  expect({ foo: 1, bar: 2 } |> pickBy(value => value === 1)).toEqual({ foo: 1 })
  expect({ foo: 1, bar: 2 } |> pickBy((value, key) => key === 'foo')).toEqual({ foo: 1 })
}
