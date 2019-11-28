import { parseInt } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('2' |> parseInt).toEqual(2)
