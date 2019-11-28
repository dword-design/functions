import { forIn } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  let result = ''
  forIn(value => result += value)([1, 2, 3])
  expect(result).toEqual('123')

  result = ''
  forIn((value, key) => result += key)([1, 2, 3])
  expect(result).toEqual('012')

  result = ''
  forIn(value => result += value)({ foo: 1, bar: 2, baz: 3 })
  expect(result).toEqual('123')

  result = ''
  forIn((value, key) => result += key)({ foo: 1, bar: 2, baz: 3 })
  expect(result).toEqual('foobarbaz')
}
