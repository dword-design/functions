import { sortBy } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([{ foo: 2 }, { foo: 1 }] |> sortBy('foo')).toEqual([{ foo: 1 }, { foo: 2 }])
