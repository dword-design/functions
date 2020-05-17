import flatten from './flatten'

export default {
  valid: () =>
    expect(
      [
        [1, 2],
        [3, 4],
      ] |> flatten
    ).toEqual([1, 2, 3, 4]),
}
