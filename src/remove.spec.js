import remove from './remove'

export default {
  valid: () => expect(['foo', 'bar', 'baz'] |> remove(item => item === 'bar'))
    .toEqual(['foo', 'baz']),
}
