const endsWith = require('../endsWith')

describe('endsWith', () => {
  test('true', () => expect(endsWith('foo')('bar foo')).toBeTruthy())
  test('false', () => expect(endsWith('foo')('foo bar')).toBeFalsy())
})
