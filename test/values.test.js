import { values } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ foo: 1, bar: 2 } |> values).toEqual([1, 2])
