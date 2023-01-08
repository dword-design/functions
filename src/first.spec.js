import first from './first.js'

export default {
  false: () => expect([] |> first).toBeUndefined(),
  true: () => expect([2, 4, 3] |> first).toEqual(2),
}
