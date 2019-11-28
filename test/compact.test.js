import { compact } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, undefined, 2, '', 3, 4, false] |> compact).toEqual([1, 2, 3, 4])
