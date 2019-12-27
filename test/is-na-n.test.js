import { isNaN } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect(NaN |> isNaN).toBeTruthy()
  expect(1 |> isNaN).toBeFalsy()
  expect(undefined |> isNaN).toBeFalsy()
}
