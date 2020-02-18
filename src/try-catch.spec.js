import tryCatch from './try-catch'

export default {
  valid: async () => {
    let result = 1
    await (Promise.resolve(2) |> tryCatch(() => { throw new Error('foo') }, () => result = 2))
    expect(result).toEqual(2)
  },
}
