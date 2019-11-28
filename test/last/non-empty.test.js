import { last } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 3, 6, 2] |> last).toEqual(2)
