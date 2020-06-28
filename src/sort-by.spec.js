import sortBy from './sort-by'
import identity from './identity'

export default {
  array: () =>
    expect([{ foo: 2 }, { foo: 1 }] |> sortBy('foo')).toEqual([
      { foo: 1 },
      { foo: 2 },
    ]),
  object: () =>
    expect({ 1: 'foo', 2: 'bar' } |> sortBy(identity)).toEqual(['bar', 'foo']),
}
