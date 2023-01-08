import fromPairs from './from-pairs.js'

export default {
  valid: () =>
    expect(
      [
        ['foo', 1],
        ['bar', 2],
      ] |> fromPairs
    ).toEqual({ bar: 2, foo: 1 }),
}
