import { range } from '@dword-design/functions'

export default () => {
  expect(range(4)).toEqual([0, 1, 2, 3])
  expect(range(1, 4)).toEqual([1, 2, 3])
  expect(range(1, 6, 2)).toEqual([1, 3, 5])
}
