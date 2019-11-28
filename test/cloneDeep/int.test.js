import { cloneDeep } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(2 |> cloneDeep).toEqual(2)
