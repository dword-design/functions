import { filterAsync } from '@dword-design/functions'

export default async () => expect([1, 2, 3] |> filterAsync(value => Promise.resolve(value !== 2)) |> await).toEqual([1, 3])
