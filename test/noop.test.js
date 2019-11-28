import { noop } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(noop()).toBeUndefined()
