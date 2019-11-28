import { isUndefined } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(undefined |> isUndefined).toBeTruthy()
