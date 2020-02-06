import { isNaN } from '@dword-design/functions'

export default () => {
  expect(NaN |> isNaN).toBeTruthy()
  expect(1 |> isNaN).toBeFalsy()
  expect(undefined |> isNaN).toBeFalsy()
}
