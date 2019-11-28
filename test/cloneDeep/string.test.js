import { cloneDeep } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('foo' |> cloneDeep).toEqual('foo')
