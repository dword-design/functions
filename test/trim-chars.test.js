import { trimChars } from '@dword-design/functions'

export default () => expect('\n\nfoo\n\n' |> trimChars('\n')).toEqual('foo')
