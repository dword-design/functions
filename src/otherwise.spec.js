import then from './then'
import otherwise from './otherwise'

export default {
  valid: async () => {
    let result = 1
    await (Promise.resolve()
      |> then(() => { throw new Error('foo') })
      |> otherwise(() => result = 2)
    )
    expect(result).toEqual(2)
  },
}