import { pullAll } from '@dword-design/functions'

export default () => expect(['foo', 'bar', 'baz', 'next'] |> pullAll(['bar', 'baz'])).toEqual(['foo', 'next'])
