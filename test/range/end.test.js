import { range } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(range(4)).toEqual([0, 1, 2, 3])
