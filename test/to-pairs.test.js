import { toPairs } from '@dword-design/functions'

export default () => expect({ foo: 1, bar: 2 } |> toPairs).toEqual([['foo', 1], ['bar', 2]])
