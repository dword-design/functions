import ifElse from './if-else'
import map from './map'
import multiply from './multiply'

export default {
  true: () =>
    expect(
      [1, 2, 3]
        |> ifElse(
          array => array.length === 3,
          map(multiply(2)),
          map(multiply(3))
        )
    ).toEqual([2, 4, 6]),
  false: () =>
    expect(
      [1, 2, 3]
        |> ifElse(
          array => array.length === 2,
          map(multiply(2)),
          map(multiply(3))
        )
    ).toEqual([3, 6, 9]),
}
