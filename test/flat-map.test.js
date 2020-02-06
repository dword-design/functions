import { flatMap, map } from '@dword-design/functions'

export default () => expect([[1, 2], [3, 4]] |> flatMap(array => array |> map(x => x * 2))).toEqual([2, 4, 6, 8])
