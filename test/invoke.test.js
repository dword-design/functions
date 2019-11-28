import { invoke } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ func: () => 2 } |> invoke('func')).toEqual(2)
