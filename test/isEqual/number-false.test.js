import { isEqual } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(1 |> isEqual(2)).toBeFalsy()
