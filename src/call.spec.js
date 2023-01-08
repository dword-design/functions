import call from './call.js'

export default {
  valid: () => expect((() => 1) |> call).toEqual(1),
}
