import { split } from '@dword-design/functions'

export default () => expect('1|2|3' |> split('|')).toEqual(['1', '2', '3'])
