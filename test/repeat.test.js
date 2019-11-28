import { repeat } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(1 |> repeat(3)).toEqual('111')
