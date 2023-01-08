import indexOf from './index-of.js'

export default {
  found: () => expect(['foo', 'bar'] |> indexOf('bar')).toEqual(1),
  'not found': () => expect(['foo', 'bar'] |> indexOf('baz')).toEqual(-1),
}
