import { sum } from '@dword-design/functions'

export default () => expect([1, 2, 3] |> sum).toEqual(6)
