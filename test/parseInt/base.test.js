import { parseInt } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('b' |> parseInt(16)).toEqual(11)
