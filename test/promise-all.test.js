import { promiseAll } from '@dword-design/functions'

export default async () => expect(await ([Promise.resolve(2), Promise.resolve(3)] |> promiseAll)).toEqual([2, 3])
