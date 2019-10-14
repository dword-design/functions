const ifElse = require('@dword-design/functions/ifElse')
const pipe = require('pipe-fns')
const expect = require('expect')

describe('ifElse', () => {

    it('if', () => expect(pipe(1, ifElse(x => x == 1, x => x * 2, x => x * 3))).toEqual(2))
    it('else', () => expect(pipe(1, ifElse(x => x == 2, x => x * 2, x => x * 3))).toEqual(3))
    it('else missing', () => expect(pipe(1, ifElse(x => x == 2, x => x * 2))).toEqual(1))
})