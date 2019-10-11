const omitBy = require('@dword-design/functions/omitBy')
const expect = require('expect')

describe('omitBy', () => {

  it('works', () => expect(omitBy(x => x.startsWith('f'))({ a: 'foo', b: 'bar' })).toEqual({ b: 'bar' }))
})
