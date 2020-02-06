import { remove } from '@dword-design/functions'

export default () => expect(['foo', 'bar', 'baz'] |> remove(item => item === 'bar')).toEqual(['foo', 'baz'])
