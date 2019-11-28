import { includes } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([1, 2, 3] |> includes(1)).toBeTruthy()
  expect([1, 2, 3] |> includes(4)).toBeFalsy()
}
