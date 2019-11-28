import { endsWith } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect('foobarbaz' |> endsWith('baz')).toBeTruthy()
  expect('foobarbar' |> endsWith('baz')).toBeFalsy()
}
