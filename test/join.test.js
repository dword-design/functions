import { join } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(['1', '2', '3'] |> join(',')).toEqual('1,2,3')
