import { startsWith } from '@dword-design/functions'

export default () => {
  expect('foobarbaz' |> startsWith('foo')).toBeTruthy()
  expect('barbazfoo' |> startsWith('foo')).toBeFalsy()
}
