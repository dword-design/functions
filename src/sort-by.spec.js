import identity from './identity.js'
import sortBy from './sort-by.js'

export default {
  array: () =>
    expect([{ foo: 2 }, { foo: 1 }] |> sortBy('foo')).toEqual([
      { foo: 1 },
      { foo: 2 },
    ]),
  'multiple compare functions': () =>
    expect(
      [
        { bar: 1, foo: 2 },
        { bar: 2, foo: 1 },
        { bar: 1, foo: 1 },
      ] |> sortBy(['foo', 'bar']),
    ).toEqual([
      { bar: 1, foo: 1 },
      { bar: 2, foo: 1 },
      { bar: 1, foo: 2 },
    ]),
  object: () =>
    expect({ 1: 'foo', 2: 'bar' } |> sortBy(identity)).toEqual(['bar', 'foo']),
}
