import { split } from '@dword-design/functions'
import expect from 'expect'

export default () => expect('1|2|3' |> split('|')).toEqual(['1', '2', '3'])
