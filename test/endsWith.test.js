const endsWith = require('@dword-design/functions/endsWith')
const expect = require('expect')

describe('endsWith', () => {
  it('true', () => expect(endsWith('foo')('bar foo')).toBeTruthy())
  it('false', () => expect(endsWith('foo')('foo bar')).toBeFalsy())
})
