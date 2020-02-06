import { then, otherwise } from '@dword-design/functions'

export default async () => {
  let result = 1
  await (Promise.resolve()
    |> then(() => { throw new Error('foo') })
    |> otherwise(() => result = 2)
  )
  expect(result).toEqual(2)
}
