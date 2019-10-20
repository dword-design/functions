const otherwise = require('@dword-design/functions/otherwise')
const then = require('@dword-design/functions/then')
const expect = require('expect')
const pipe = require('pipe-fns')

describe('otherwise', () => {
  it('no error', async () => expect(await pipe(Promise.resolve(1), otherwise(() => 'foo'))).toEqual(1))
  it('default error function', async () => expect(await pipe(Promise.resolve(), then(() => { throw new Error('foo') }), otherwise()) instanceof Error).toBeTruthy())
  it('error', async () => expect(await pipe(Promise.resolve(), then(() => { throw new Error('foo') }), otherwise(({ message }) => message))).toEqual('foo'))
})