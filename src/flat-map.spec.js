import flatMap from './flat-map.js'
import map from './map.js'

export default {
  valid: () =>
    expect(
      [
        [1, 2],
        [3, 4],
      ] |> flatMap(array => array |> map(x => x * 2)),
    ).toEqual([2, 4, 6, 8]),
}
