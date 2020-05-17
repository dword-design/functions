import mapValues from './map-values'

export default {
  valid: () =>
    expect({ foo: 1, bar: 2 } |> mapValues(value => value * 2)).toEqual({
      foo: 2,
      bar: 4,
    }),
}
