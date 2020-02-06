import { repeat } from '@dword-design/functions'

export default () => expect(1 |> repeat(3)).toEqual('111')
