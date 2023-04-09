import trim from './trim.js'

export default {
  valid: () => expect('  foo  ' |> trim).toEqual('foo'),
}
