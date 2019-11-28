import { some } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ x: 1, y: 2, z: 3 } |> some(x => x >= 2)).toBeTruthy()
