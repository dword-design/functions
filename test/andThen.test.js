const andThen = require('@dword-design/functions/andThen')
const pipe = require('pipe-fns')
const expect = require('expect')

describe('andThen', () => {

  it('works', () => expect(pipe(new Promise(resolve => setTimeout(() => resolve(1), 10)), andThen(x => x * 2))).resolves.toEqual(2))

  it('exceptions', () => expect(pipe(Promise.resolve(), andThen(x => { throw new Error('foo') }))).rejects.toThrow())
})