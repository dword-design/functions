import { pullAt } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(['foo', 'bar', 'baz'] |> pullAt(1)).toEqual(['foo', 'baz'])
