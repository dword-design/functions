import { sortBy } from '@dword-design/functions'

export default () => expect([{ foo: 2 }, { foo: 1 }] |> sortBy('foo')).toEqual([{ foo: 1 }, { foo: 2 }])
