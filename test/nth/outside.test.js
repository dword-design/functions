import { nth } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([1, 3] |> nth(2)).toBeUndefined()
