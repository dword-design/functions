import { invokeArgs } from '@dword-design/functions'

export default () => expect({ func: x => x * 2 } |> invokeArgs('func', [2])).toEqual(4)
