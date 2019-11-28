import { every } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ foo: 1, bar: 2, baz: 3 } |> every(x => x >= 1)).toBeTruthy()
