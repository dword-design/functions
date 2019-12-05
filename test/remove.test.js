import { remove } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(['foo', 'bar', 'baz'] |> remove(item => item === 'bar')).toEqual(['foo', 'baz'])
