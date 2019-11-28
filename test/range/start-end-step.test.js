import { range } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(range(1, 6, 2)).toEqual([1, 3, 5])
