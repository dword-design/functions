import trim from './trim'

export default {
  valid: () => expect('  foo  ' |> trim).toEqual('foo'),
}
