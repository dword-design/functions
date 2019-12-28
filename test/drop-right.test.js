import { dropRight } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([1, 2, 3] |> dropRight()).toEqual([1, 2])
  expect([1, 2, 3] |> dropRight(2)).toEqual([1])
}
