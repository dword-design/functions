import pull from './pull'

export default {
  valid: () => expect(['foo', 'bar', 'baz'] |> pull('bar')).toEqual(['foo', 'baz']),
}
