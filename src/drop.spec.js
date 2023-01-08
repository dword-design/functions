import drop from './drop.js'

export default {
  empty: () => expect([1, 2, 3] |> drop()).toEqual([2, 3]),
  param: () => expect([1, 2, 3] |> drop(2)).toEqual([3]),
}
