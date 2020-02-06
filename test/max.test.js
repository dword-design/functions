import { max } from '@dword-design/functions'

export default () => expect([1, 3, 6, 4] |> max).toEqual(6)
