import { keyBy } from '@dword-design/functions'
import expect from 'expect'

export default () => expect([{ x: 'foo', y: 1 }, { x: 'bar', y: 2 }] |> keyBy('x'))
  .toEqual({ foo: { x: 'foo', y: 1 }, bar: { x: 'bar', y: 2} })
