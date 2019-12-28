import { drop } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([1, 2, 3] |> drop()).toEqual([1, 2])
  expect([1, 2, 3] |> drop(2)).toEqual([1])
}
