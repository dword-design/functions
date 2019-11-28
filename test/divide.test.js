import { divide } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(4 |> divide(2)).toEqual(2)
