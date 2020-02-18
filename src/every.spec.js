import every from './every'

export default {
  'array true': () => expect([1, 2, 3] |> every(x => x >= 1)).toBeTruthy(),
  'array false': () => expect([1, 2, 3] |> every(x => x >= 2)).toBeFalsy(),
  'object true': () => expect({ foo: 1, bar: 2, baz: 3 } |> every(x => x >= 1)).toBeTruthy(),
  'object false': () => expect({ foo: 1, bar: 2, baz: 3 } |> every(x => x >= 1)).toBeTruthy(),
}
