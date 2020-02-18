import xor from './xor'

export default {
  valid: () => expect([1, 2] |> xor([2, 3])).toEqual([1, 3]),
}
