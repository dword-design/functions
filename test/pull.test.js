import { pull } from '@dword-design/functions'

export default () => expect(['foo', 'bar', 'baz'] |> pull('bar')).toEqual(['foo', 'baz'])
