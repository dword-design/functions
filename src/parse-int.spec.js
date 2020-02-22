import parseInt from './parse-int'

export default {
  'base 10': () => expect('2' |> parseInt).toEqual(2),
  'base 16': () => expect('b' |> parseInt(16)).toEqual(11),
}
