import { trim } from '@dword-design/functions'

export default () => expect('  foo  ' |> trim).toEqual('foo')
