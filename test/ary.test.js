const ary = require('@dword-design/functions/ary')
const expect = require('expect')

describe('ary', () => {
  it('1', () => expect(ary((a, b) => `${a}${b}`, 1)('a', 'b')).toEqual('aundefined'))
  it('3', () => expect(ary((a, b, c, d) => `${a}${b}${c}${d}`, 3)('a', 'b', 'c', 'd')).toEqual('abcundefined'))
})