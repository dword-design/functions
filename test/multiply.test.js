import { multiply } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(3 |> multiply(3)).toEqual(9)
