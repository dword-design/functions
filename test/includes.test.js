import { includes } from '@dword-design/functions'

export default () => {
  expect([1, 2, 3] |> includes(1)).toBeTruthy()
  expect([1, 2, 3] |> includes(4)).toBeFalsy()
}
