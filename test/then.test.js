import { then } from '@dword-design/functions'
import expect from 'expect'

export default async () => expect(await (Promise.resolve(2) |> then(x => x * 2))).toEqual(4)
