import { isEmpty } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([] |> isEmpty).toBeTruthy()
  expect({} |> isEmpty).toBeTruthy()
  expect('' |> isEmpty).toBeTruthy()
  expect(undefined |> isEmpty).toBeTruthy()
  expect(0 |> isEmpty).toBeTruthy()
  expect(1 |> isEmpty).toBeTruthy()
  expect('foo' |> isEmpty).toBeFalsy()
  expect([1] |> isEmpty).toBeFalsy()
  expect({ foo: 1 } |> isEmpty).toBeFalsy()
}
