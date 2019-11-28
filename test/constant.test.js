import { constant } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(constant(1)()).toEqual(1)
