import { some } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 2, 3] |> some(x => x >= 4)).toBeFalsy()
