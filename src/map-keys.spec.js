import mapKeys from './map-keys'

export default {
  value: () =>
    expect({ foo: 1, bar: 2 } |> mapKeys(value => `key${value}`)).toEqual({
      key1: 1,
      key2: 2,
    }),
  key: () =>
    expect({ foo: 1, bar: 2 } |> mapKeys((value, key) => `${key}x`)).toEqual({
      foox: 1,
      barx: 2,
    }),
}
