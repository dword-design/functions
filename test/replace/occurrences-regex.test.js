import { replace } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('foo foo bar' |> replace(/foo/g, 'baz')).toEqual('baz baz bar')
