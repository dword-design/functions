import { some } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([1, 2, 3] |> some(x => x >= 2)).toBeTruthy()
  expect([1, 2, 3] |> some(x => x >= 4)).toBeFalsy()
  expect({ x: 1, y: 2, z: 3 } |> some(x => x >= 2)).toBeTruthy()
  expect({ x: 1, y: 2, z: 3 } |> some(x => x >= 4)).toBeFalsy()
}
