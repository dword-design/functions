import { indexOf } from '@dword-design/functions'

export default () => {
  expect(['foo', 'bar'] |> indexOf('bar')).toEqual(1)
  expect(['foo', 'bar'] |> indexOf('baz')).toEqual(-1)
}
