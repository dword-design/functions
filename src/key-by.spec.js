import keyBy from './key-by'

export default {
  valid: () =>
    expect(
      [
        { x: 'foo', y: 1 },
        { x: 'bar', y: 2 },
      ] |> keyBy('x')
    ).toEqual({ bar: { x: 'bar', y: 2 }, foo: { x: 'foo', y: 1 } }),
}
