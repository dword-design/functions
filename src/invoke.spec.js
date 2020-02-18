import invoke from './invoke'

export default {
  valid: () => expect({ func: () => 2 } |> invoke('func')).toEqual(2),
}
