const replace = require('../replace')

describe('replace', () => {
  test('replace string', () => expect(replace('foo', 'bar')('baz foo baz')).toEqual('baz bar baz'))
  test('replace string only first occurrence', () => expect(replace('foo', 'bar')('baz foo foo')).toEqual('baz bar foo'))
  test('replace regex all occurrences', () => expect(replace(/foo/g, 'bar')('baz foo foo')).toEqual('baz bar bar'))
})
