import divide from './divide'

export default {
  valid: () => expect(4 |> divide(2)).toEqual(2),
}
