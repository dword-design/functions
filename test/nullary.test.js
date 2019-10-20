const nullary = require('@dword-design/functions/nullary')
const expect = require('expect')

it('nullary', () => expect(nullary((a, b) => `${a}${b}`, 1)('a', 'b')).toEqual('undefinedundefined'))