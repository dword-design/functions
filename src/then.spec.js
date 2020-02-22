import then from './then'

export default {
  valid: async () => expect(await (Promise.resolve(2) |> then(x => x * 2))).toEqual(4),
}
