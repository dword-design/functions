import call from './call'

export default {
  valid: () => expect((() => 1) |> call).toEqual(1),
}
