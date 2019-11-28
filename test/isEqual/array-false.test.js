import { isEqual } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(['foo', 'bar'] |> isEqual(['bar', 'foo'])).toBeFalsy()
