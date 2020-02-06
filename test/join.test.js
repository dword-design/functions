import { join } from '@dword-design/functions'

export default () => expect(['1', '2', '3'] |> join(',')).toEqual('1,2,3')
