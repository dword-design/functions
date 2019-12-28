import { trimChars } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('\n\nfoo\n\n' |> trimChars('\n')).toEqual('foo')
