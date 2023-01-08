import toPairs from './to-pairs.js'

export default {
  valid: () =>
    expect({ bar: 2, foo: 1 } |> toPairs).toEqual([
      ['bar', 2],
      ['foo', 1],
    ]),
}
