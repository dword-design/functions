import { isEqual } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(null |> isEqual(undefined)).toBeFalsy()
