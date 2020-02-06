import { isEqual } from '@dword-design/functions'

export default () => {
  expect(['foo', 'bar'] |> isEqual(['foo', 'bar'])).toBeTruthy()
  expect(['foo', 'bar'] |> isEqual(['bar', 'foo'])).toBeFalsy()
  expect({ foo: 1, bar: 2 } |> isEqual({ foo: 1, bar: 2 })).toBeTruthy()
  expect({ foo: 1, bar: 2 } |> isEqual({ foo: 1 })).toBeFalsy()
  expect('foo' |> isEqual('foo')).toBeTruthy()
  expect('foo' |> isEqual('bar')).toBeFalsy()
  expect(1 |> isEqual(1)).toBeTruthy()
  expect(1 |> isEqual(2)).toBeFalsy()
  expect(null |> isEqual(undefined)).toBeFalsy()
}
