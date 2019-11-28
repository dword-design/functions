import { toPairs } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ foo: 1, bar: 2 } |> toPairs).toEqual([['foo', 1], ['bar', 2]])