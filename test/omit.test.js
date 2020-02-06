import { omit } from '@dword-design/functions'

export default () => {
  expect({ foo: 1, bar: 2 } |> omit('foo')).toEqual({ bar: 2 })
  expect({ foo: 1, bar: 2, baz: 3 } |> omit(['foo', 'bar'])).toEqual({ baz: 3 })
}