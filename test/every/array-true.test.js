import { every } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 2, 3] |> every(x => x >= 1)).toBeTruthy()
