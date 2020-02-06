import { pullAt } from '@dword-design/functions'

export default () => expect(['foo', 'bar', 'baz'] |> pullAt(1)).toEqual(['foo', 'baz'])
