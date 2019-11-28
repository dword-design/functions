import { negate } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(negate(x => x === 1)(1)).toBeFalsy()
