import { unary } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(unary((x, y) => `${x}${y}`)(1, 2)).toEqual('1undefined')
