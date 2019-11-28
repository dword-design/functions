import { times } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(times(4, x => x)).toEqual([0, 1, 2, 3])
