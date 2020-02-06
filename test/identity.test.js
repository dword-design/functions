import { identity } from '@dword-design/functions'

export default () => {
  expect(identity(1)).toEqual(1)
  expect(identity(2)).toEqual(2)

  const str = 'foo'
  expect(identity(str)).toBe(str)
  expect(identity(undefined)).toEqual(undefined)

  const array = [1, 2]
  expect(identity(array)).toBe(array)

  const obj = { foo: 1, bar: 2 }
  expect(identity(obj)).toBe(obj)
}
