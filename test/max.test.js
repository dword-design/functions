import { max } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 3, 6, 4] |> max).toEqual(6)
