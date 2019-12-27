import { flatMap, map } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([[1, 2], [3, 4]] |> flatMap(array => array |> map(x => x * 2))).toEqual([2, 4, 6, 8])
