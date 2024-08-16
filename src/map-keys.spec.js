import mapKeys from './map-keys.js';

export default {
  key: () =>
    expect({ bar: 2, foo: 1 } |> mapKeys((value, key) => `${key}x`)).toEqual({
      barx: 2,
      foox: 1,
    }),
  value: () =>
    expect({ bar: 2, foo: 1 } |> mapKeys(value => `key${value}`)).toEqual({
      key1: 1,
      key2: 2,
    }),
};
