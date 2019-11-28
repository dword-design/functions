import { xor } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 2] |> xor([2, 3])).toEqual([1, 3])
