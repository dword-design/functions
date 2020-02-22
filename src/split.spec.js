import split from './split'

export default {
  valid: () => expect('1|2|3' |> split('|')).toEqual(['1', '2', '3']),
}
