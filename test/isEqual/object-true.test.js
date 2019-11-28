import { isEqual } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ foo: 1, bar: 2 } |> isEqual({ foo: 1, bar: 2 })).toBeTruthy()
