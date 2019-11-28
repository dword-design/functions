import { tryCatch } from '@dword-design/functions'
import expect from 'expect'

export default async () => {
  let result = 1
  await (Promise.resolve(2) |> tryCatch(() => { throw new Error('foo') }, () => result = 2))
  expect(result).toEqual(2)
}