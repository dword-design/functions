import { pull } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(['foo', 'bar', 'baz'] |> pull('bar')).toEqual(['foo', 'baz'])
