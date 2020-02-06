import { omitBy } from '@dword-design/functions'

export default () => {
  expect({ foo: 1, bar: 2 } |> omitBy(value => value === 1)).toEqual({ bar: 2 })
  expect({ foo: 1, bar: 2 } |> omitBy((value, key) => key === 'foo')).toEqual({ bar: 2 })
}
