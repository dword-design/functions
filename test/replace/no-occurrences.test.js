import { replace } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('foo bar bar' |> replace('baz', 'next')).toEqual('foo bar bar')
