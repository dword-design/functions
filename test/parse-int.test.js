import { parseInt } from '@dword-design/functions'

export default () => {
  expect('2' |> parseInt).toEqual(2)
  expect('b' |> parseInt(16)).toEqual(11)
}
