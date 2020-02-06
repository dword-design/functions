import { invoke } from '@dword-design/functions'

export default () => expect({ func: () => 2 } |> invoke('func')).toEqual(2)
