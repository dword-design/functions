import { then } from '@dword-design/functions'

export default async () => expect(await (Promise.resolve(2) |> then(x => x * 2))).toEqual(4)
