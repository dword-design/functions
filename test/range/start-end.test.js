import { range } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(range(1, 4)).toEqual([1, 2, 3])
