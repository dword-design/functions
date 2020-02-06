import { property } from '@dword-design/functions'

export default () => expect({ foo: { bar: 1 } } |> property('foo.bar')).toEqual(1)
