import overEvery from './over-every'

export default {
  'multiple false': () =>
    expect(
      0
        |> overEvery(
          x => x >= 1,
          x => x >= 0
        )
    ).toBeFalsy(),
  'multiple true': () =>
    expect(
      1
        |> overEvery(
          x => x >= 1,
          x => x >= 0
        )
    ).toBeTruthy(),
  'single false': () => expect(1 |> overEvery(x => x === 2)).toBeFalsy(),
  'single true': () => expect(1 |> overEvery(x => x === 1)).toBeTruthy(),
}
