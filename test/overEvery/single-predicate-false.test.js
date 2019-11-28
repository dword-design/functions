import { overEvery } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(overEvery(x => x === 2)(1)).toBeFalsy()
