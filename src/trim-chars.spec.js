import trimChars from './trim-chars.js'

export default {
  valid: () => expect('\n\nfoo\n\n' |> trimChars('\n')).toEqual('foo'),
}
