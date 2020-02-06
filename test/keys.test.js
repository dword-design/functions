import { keys } from '@dword-design/functions'

export default () => expect({ foo: 1, bar: 2 } |> keys).toEqual(['foo', 'bar'])
