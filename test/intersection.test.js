import { intersection } from '@dword-design/functions'

export default () => expect([1, 2, 3] |> intersection([2, 3, 4])).toEqual([2, 3])
