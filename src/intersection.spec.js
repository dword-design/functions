import intersection from './intersection'

export default {
  valid: () => expect([1, 2, 3] |> intersection([2, 3, 4])).toEqual([2, 3]),
}
