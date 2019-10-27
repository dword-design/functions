const some = require('@dword-design/functions/dist/some')
const expect = require('expect')

describe('some', () => {
  it('true', () => expect(some(x => x === 2)([1, 2])).toBeTruthy())
  it('false', () => expect(some(x => x === 2)([1, 3])).toBeFalsy())
})
