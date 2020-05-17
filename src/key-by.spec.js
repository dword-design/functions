import keyBy from './key-by'

export default {
  valid: () =>
    expect(
      [
        { x: 'foo', y: 1 },
        { x: 'bar', y: 2 },
      ] |> keyBy('x')
    ).toEqual({ foo: { x: 'foo', y: 1 }, bar: { x: 'bar', y: 2 } }),
}
