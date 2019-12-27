import { startsWith } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect('foobarbaz' |> startsWith('foo')).toBeTruthy()
  expect('barbazfoo' |> startsWith('foo')).toBeFalsy()
}
