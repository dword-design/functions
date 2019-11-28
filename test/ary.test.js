import { ary } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(ary((x, y, z) => `${x}${y}${z}`, 2)(1, 2)).toEqual('12undefined')
