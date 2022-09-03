import uniqBy from './uniq-by'

export default {
  valid: () =>
    expect(
      [
        { bar: 1, foo: 1 },
        { bar: 2, foo: 1 },
      ] |> uniqBy('foo')
    ).toEqual([{ bar: 1, foo: 1 }]),
}
