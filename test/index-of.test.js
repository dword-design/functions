import { indexOf } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect(['foo', 'bar'] |> indexOf('bar')).toEqual(1)
  expect(['foo', 'bar'] |> indexOf('baz')).toEqual(-1)
}
