import groupBy from './group-by'

export default {
  valid: () =>
    expect(
      [
        { x: 'foo', bar: 1 },
        { x: 'foo', bar: 2 },
        { x: 'bar', bar: 3 },
      ] |> groupBy('x')
    ).toEqual({
      foo: [
        { x: 'foo', bar: 1 },
        { x: 'foo', bar: 2 },
      ],
      bar: [{ x: 'bar', bar: 3 }],
    }),
}
