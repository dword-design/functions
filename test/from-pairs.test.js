import { fromPairs } from '@dword-design/functions'

export default () => expect([['foo', 1], ['bar', 2]] |> fromPairs).toEqual({ foo: 1, bar: 2 })
