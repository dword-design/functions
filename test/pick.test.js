import { pick } from '@dword-design/functions'

export default () => expect({ foo: 1, bar: 2, baz: 3 } |> pick(['foo', 'bar'])).toEqual({ foo: 1, bar: 2 })
