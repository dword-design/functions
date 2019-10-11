const replace = require('@dword-design/functions/replace')
const expect = require('expect')

describe('replace', () => {
  it('replace string', () => expect(replace('foo', 'bar')('baz foo baz')).toEqual('baz bar baz'))
  it('replace string only first occurrence', () => expect(replace('foo', 'bar')('baz foo foo')).toEqual('baz bar foo'))
  it('replace regex all occurrences', () => expect(replace(/foo/g, 'bar')('baz foo foo')).toEqual('baz bar bar'))
})
