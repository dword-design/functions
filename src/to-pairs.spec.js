import toPairs from './to-pairs'

export default {
  valid: () =>
    expect({ bar: 2, foo: 1 } |> toPairs).toEqual([
      ['foo', 1],
      ['bar', 2],
    ]),
}
