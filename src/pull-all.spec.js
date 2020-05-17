import pullAll from './pull-all'

export default {
  valid: () =>
    expect(['foo', 'bar', 'baz', 'next'] |> pullAll(['bar', 'baz'])).toEqual([
      'foo',
      'next',
    ]),
}
