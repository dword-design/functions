import first from './first'

export default {
  true: () => expect([2, 4, 3] |> first).toEqual(2),
  false: () => expect([] |> first).toBeUndefined(),
}
