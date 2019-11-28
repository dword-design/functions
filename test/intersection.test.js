import { intersection } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 2, 3] |> intersection([2, 3, 4])).toEqual([2, 3])
