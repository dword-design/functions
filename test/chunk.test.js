import { chunk } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 2, 3, 4, 5] |> chunk(2)).toEqual([[1, 2], [3, 4], [5]])
