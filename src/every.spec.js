import every from './every.js'

export default {
  'array false': () => expect([1, 2, 3] |> every(x => x >= 2)).toBeFalsy(),
  'array true': () => expect([1, 2, 3] |> every(x => x >= 1)).toBeTruthy(),
  'object false': () =>
    expect({ bar: 2, baz: 3, foo: 1 } |> every(x => x >= 1)).toBeTruthy(),
  'object true': () =>
    expect({ bar: 2, baz: 3, foo: 1 } |> every(x => x >= 1)).toBeTruthy(),
}
