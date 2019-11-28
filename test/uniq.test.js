import { uniq } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 2, 3, 1, 3, 4] |> uniq).toEqual([1, 2, 3, 4])
