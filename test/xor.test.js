import { xor } from '@dword-design/functions'

export default () => expect([1, 2] |> xor([2, 3])).toEqual([1, 3])
