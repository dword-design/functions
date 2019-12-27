import { pullAll } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(['foo', 'bar', 'baz', 'next'] |> pullAll(['bar', 'baz'])).toEqual(['foo', 'next'])
