const tryCatch = require('@dword-design/functions/tryCatch')
const expect = require('expect')
const pipe = require('pipe-fns')

describe('tryCatch', () => {
  it('no errors', () => expect(pipe(1, tryCatch(x => x * 2))).toEqual(2))
  it('default error function', () => expect(pipe(1, tryCatch(x => { throw new Error('foo') })) instanceof Error).toBeTruthy())
  it('error', () => expect(pipe(1, tryCatch(x => { throw new Error('foo') }, ({ message }) => message))).toEqual('foo'))
})