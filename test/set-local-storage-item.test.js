import { setLocalStorageItem } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  const storage = {}
  global.localStorage = {
    setItem: (key, value) => storage[key] = value,
  }
  setLocalStorageItem('foo', 2)
  expect(storage['foo']).toEqual(2)
}
