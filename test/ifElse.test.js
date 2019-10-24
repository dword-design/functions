const ifElse = require('@dword-design/functions/ifElse')
const expect = require('expect')

describe('ifElse', () => {

    it('if', () => expect(ifElse(x => x == 1, x => x * 2, x => x * 3)(1)).toEqual(2))
    it('else', () => expect(ifElse(x => x == 2, x => x * 2, x => x * 3)(1)).toEqual(3))
    it('else missing', () => expect(ifElse(x => x == 2, x => x * 2)(1)).toEqual(1))
})
