import { endsWith } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('foobarbar' |> endsWith('baz')).toBeFalsy()
