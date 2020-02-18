import indexOf from './index-of'

export default {
  found: () => expect(['foo', 'bar'] |> indexOf('bar')).toEqual(1),
  'not found': () => expect(['foo', 'bar'] |> indexOf('baz')).toEqual(-1),
}
