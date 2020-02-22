import max from './max'

export default {
  valid: () => expect([1, 3, 6, 4] |> max).toEqual(6),
}
