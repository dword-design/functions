import { slice } from '@dword-design/functions'

export default () => {
  expect([1, 2, 3, 4] |> slice(2)).toEqual([3, 4])
  expect([1, 2, 3, 4] |> slice(1, 3)).toEqual([2, 3])
}
