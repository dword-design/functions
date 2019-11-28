import { first } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([2, 4, 3] |> first).toEqual(2)
  expect([] |> first).toBeUndefined()
}
