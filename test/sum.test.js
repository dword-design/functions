import { sum } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 2, 3] |> sum).toEqual(6)
