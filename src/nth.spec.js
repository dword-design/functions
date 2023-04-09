import nth from './nth.js'

export default {
  defined: () => expect([1, 2, 4, 3] |> nth(2)).toEqual(4),
  undefined: () => expect([1, 3] |> nth(2)).toBeUndefined(),
}
