import { abs } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect(3 |> abs).toEqual(3)
  expect(0 |> abs).toEqual(0)
  expect(-3 |> abs).toEqual(3)
}
