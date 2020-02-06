import { values } from '@dword-design/functions'

export default () => expect({ foo: 1, bar: 2 } |> values).toEqual([1, 2])
