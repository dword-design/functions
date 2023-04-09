import flatten from './flatten.js'

export default {
  valid: () =>
    expect(
      [
        [1, 2],
        [3, 4],
      ] |> flatten
    ).toEqual([1, 2, 3, 4]),
}
