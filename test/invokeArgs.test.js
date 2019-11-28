import { invokeArgs } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ func: x => x * 2 } |> invokeArgs('func', [2])).toEqual(4)
