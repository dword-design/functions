import invoke from './invoke.js'

export default {
  valid: () => expect({ func: () => 2 } |> invoke('func')).toEqual(2),
}
