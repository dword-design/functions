import { property } from '@dword-design/functions'
import expect from 'expect'

export default () => expect({ foo: { bar: 1 } } |> property('foo.bar')).toEqual(1)
