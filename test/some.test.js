const some = require('../some')

describe('some', () => {
  test('true', () => expect(some(x => x === 2)([1, 2])).toBeTruthy())
  test('false', () => expect(some(x => x === 2)([1, 3])).toBeFalsy())
})
