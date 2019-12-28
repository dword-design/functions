import { min } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 3, 6, 4] |> min).toEqual(1)
