import { overEvery } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(overEvery(x => x >= 1, x => x >= 0)(0)).toBeFalsy()
