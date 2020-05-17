import pullAt from './pull-at'

export default {
  valid: () =>
    expect(['foo', 'bar', 'baz'] |> pullAt(1)).toEqual(['foo', 'baz']),
}
