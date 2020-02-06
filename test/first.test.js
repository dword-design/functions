import { first } from '@dword-design/functions'

export default () => {
  expect([2, 4, 3] |> first).toEqual(2)
  expect([] |> first).toBeUndefined()
}
