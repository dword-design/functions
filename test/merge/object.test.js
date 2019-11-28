import { merge } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ foo: 1 } |> merge({ bar: 2 })).toEqual({ foo: 1, bar: 2 })
