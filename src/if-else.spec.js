import ifElse from './if-else.js'
import map from './map.js'
import multiply from './multiply.js'

export default {
  false: () =>
    expect(
      [1, 2, 3]
        |> ifElse(
          array => array.length === 2,
          map(multiply(2)),
          map(multiply(3))
        )
    ).toEqual([3, 6, 9]),
  true: () =>
    expect(
      [1, 2, 3]
        |> ifElse(
          array => array.length === 3,
          map(multiply(2)),
          map(multiply(3))
        )
    ).toEqual([2, 4, 6]),
}
