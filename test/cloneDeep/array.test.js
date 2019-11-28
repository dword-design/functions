import { cloneDeep } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  const array = [1, 2, 3]
  const array2 = array |> cloneDeep
  array2[1] = 1
  expect(array).toEqual([1, 2, 3])
  expect(array2).toEqual([1, 1, 3])
}
