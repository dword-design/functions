import { isUndefined } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect(undefined |> isUndefined).toBeTruthy()
  expect([] |> isUndefined).toBeFalsy()
  expect({} |> isUndefined).toBeFalsy()
  expect('' |> isUndefined).toBeFalsy()
  expect(0 |> isUndefined).toBeFalsy()
}
