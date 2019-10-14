const then = require('@dword-design/functions/then')
const pipe = require('pipe-fns')
const expect = require('expect')

describe('then', () => {

  it('works', () => expect(pipe(new Promise(resolve => setTimeout(() => resolve(1), 10)), then(x => x * 2))).resolves.toEqual(2))

  it('exceptions', () => expect(pipe(Promise.resolve(), then(x => { throw new Error('foo') }))).rejects.toThrow())
})