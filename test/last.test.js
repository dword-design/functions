import { last } from '@dword-design/functions'

export default () => {
  expect([1, 3, 6, 2] |> last).toEqual(2)
  expect([] |> last).toBeUndefined()
}
