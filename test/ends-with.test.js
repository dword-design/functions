import { endsWith } from '@dword-design/functions'

export default () => {
  expect('foobarbaz' |> endsWith('baz')).toBeTruthy()
  expect('foobarbar' |> endsWith('baz')).toBeFalsy()
}
