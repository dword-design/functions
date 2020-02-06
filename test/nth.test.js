import { nth } from '@dword-design/functions'

export default () => {
  expect([1, 2, 4, 3] |> nth(2)).toEqual(4)
  expect([1, 3] |> nth(2)).toBeUndefined()
}
