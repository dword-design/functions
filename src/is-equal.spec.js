import isEqual from './is-equal'

export default {
  array: () => {
    expect(['foo', 'bar'] |> isEqual(['foo', 'bar'])).toBeTruthy()
    expect(['foo', 'bar'] |> isEqual(['bar', 'foo'])).toBeFalsy()
  },
  object: () => {
    expect({ foo: 1, bar: 2 } |> isEqual({ foo: 1, bar: 2 })).toBeTruthy()
    expect({ foo: 1, bar: 2 } |> isEqual({ foo: 1 })).toBeFalsy()
  },
  string: () => {
    expect('foo' |> isEqual('foo')).toBeTruthy()
    expect('foo' |> isEqual('bar')).toBeFalsy()
  },
  number: () => {
    expect(1 |> isEqual(1)).toBeTruthy()
    expect(1 |> isEqual(2)).toBeFalsy()
  },
  undefined: () => {
    expect(null |> isEqual(undefined)).toBeFalsy()
  },
}
