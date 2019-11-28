import { replace } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('foo foo bar' |> replace('foo', 'baz')).toEqual('baz foo bar')
