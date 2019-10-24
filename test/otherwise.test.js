const otherwise = require('@dword-design/functions/otherwise')
const expect = require('expect')

describe('otherwise', () => {
  it('no error', async () => expect(await otherwise(() => 'foo')(Promise.resolve(1))).toEqual(1))
  it('default error function', async () => expect(await otherwise()(Promise.resolve().then(() => { throw new Error('foo') })) instanceof Error).toBeTruthy())
  it('error', async () => expect(await otherwise(({ message }) => message)(Promise.resolve().then(() => { throw new Error('foo') }))).toEqual('foo'))
})
