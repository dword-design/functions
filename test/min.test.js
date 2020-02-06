import { min } from '@dword-design/functions'

export default () => expect([1, 3, 6, 4] |> min).toEqual(1)
