const then = require('@dword-design/functions/then')
const expect = require('expect')

describe('then', () => {

  it('works', () => expect(then(x => x * 2)(new Promise(resolve => setTimeout(() => resolve(1), 10)))).resolves.toEqual(2))

  it('exceptions', () => expect(then(() => { throw new Error('foo') })(Promise.resolve())).rejects.toThrow())
})
