import { isNaN } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(1 |> isNaN).toBeFalsy()
