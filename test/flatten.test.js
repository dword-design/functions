import { flatten } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([[1, 2], [3, 4]] |> flatten).toEqual([1, 2, 3, 4])
