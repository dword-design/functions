import mapValues from './map-values.js'

export default {
  valid: () =>
    expect({ bar: 2, foo: 1 } |> mapValues(value => value * 2)).toEqual({
      bar: 4,
      foo: 2,
    }),
}
