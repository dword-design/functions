import { flatten } from '@dword-design/functions'

export default () => expect([[1, 2], [3, 4]] |> flatten).toEqual([1, 2, 3, 4])
