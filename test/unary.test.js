import { unary } from '@dword-design/functions'

export default () => expect(unary((x, y) => `${x}${y}`)(1, 2)).toEqual('1undefined')
