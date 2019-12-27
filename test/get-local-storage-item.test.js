import { getLocalStorageItem } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  global.localStorage = {
    getItem: key => key === 'foo' ? 2 : undefined,
  }
  expect(getLocalStorageItem('foo')).toEqual(2)
}
