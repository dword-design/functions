import { promiseAll } from '@dword-design/functions'
import expect from 'expect'

export default async () => expect(await ([Promise.resolve(2), Promise.resolve(3)] |> promiseAll)).toEqual([2, 3])
