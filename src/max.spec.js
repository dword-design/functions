import max from './max.js'

export default {
  valid: () => expect([1, 3, 6, 4] |> max).toEqual(6),
}
