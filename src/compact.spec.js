import compact from './compact'

export default {
  valid: () => expect([1, undefined, 2, '', 3, 4, false] |> compact).toEqual([1, 2, 3, 4]),
}
