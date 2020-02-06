import { isUndefined } from '@dword-design/functions'

export default () => {
  expect(undefined |> isUndefined).toBeTruthy()
  expect([] |> isUndefined).toBeFalsy()
  expect({} |> isUndefined).toBeFalsy()
  expect('' |> isUndefined).toBeFalsy()
  expect(0 |> isUndefined).toBeFalsy()
}
