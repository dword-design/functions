import { mapValues } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ foo: 1, bar: 2 } |> mapValues(value => value * 2)).toEqual({ foo: 2, bar: 4 })
