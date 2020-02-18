import trimChars from './trim-chars'

export default {
  valid: () => expect('\n\nfoo\n\n' |> trimChars('\n')).toEqual('foo'),
}
