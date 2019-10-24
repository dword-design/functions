const tryCatch = require('@dword-design/functions/tryCatch')
const expect = require('expect')

describe('tryCatch', () => {
  it('no errors', () => expect(tryCatch(x => x * 2)(1)).toEqual(2))
  it('default error function', () => expect(tryCatch(x => { throw new Error('foo') })(1) instanceof Error).toBeTruthy())
  it('error', () => expect(tryCatch(x => { throw new Error('foo') }, ({ message }) => message)(1)).toEqual('foo'))
})
