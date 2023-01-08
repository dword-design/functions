import isEqual from './is-equal.js'

export default {
  array: () => {
    expect(['foo', 'bar'] |> isEqual(['foo', 'bar'])).toBeTruthy()
    expect(['foo', 'bar'] |> isEqual(['bar', 'foo'])).toBeFalsy()
  },
  number: () => {
    expect(1 |> isEqual(1)).toBeTruthy()
    expect(1 |> isEqual(2)).toBeFalsy()
  },
  object: () => {
    expect({ bar: 2, foo: 1 } |> isEqual({ bar: 2, foo: 1 })).toBeTruthy()
    expect({ bar: 2, foo: 1 } |> isEqual({ foo: 1 })).toBeFalsy()
  },
  string: () => {
    expect('foo' |> isEqual('foo')).toBeTruthy()
    expect('foo' |> isEqual('bar')).toBeFalsy()
  },
  undefined: () => {
    expect(null |> isEqual(undefined)).toBeFalsy()
  },
}
