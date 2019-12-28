import { trim } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('  foo  ' |> trim).toEqual('foo')
