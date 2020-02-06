import { ary } from '@dword-design/functions'

export default () => expect(ary((x, y, z) => `${x}${y}${z}`, 2)(1, 2)).toEqual('12undefined')
