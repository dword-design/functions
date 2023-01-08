import groupBy from './group-by.js'

export default {
  valid: () =>
    expect(
      [
        { bar: 1, x: 'foo' },
        { bar: 2, x: 'foo' },
        { bar: 3, x: 'bar' },
      ] |> groupBy('x')
    ).toEqual({
      bar: [{ bar: 3, x: 'bar' }],
      foo: [
        { bar: 1, x: 'foo' },
        { bar: 2, x: 'foo' },
      ],
    }),
}
