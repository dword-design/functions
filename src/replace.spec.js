import replace from './replace'

export default {
  found: () => expect('foo foo bar' |> replace('foo', 'baz')).toEqual('baz foo bar'),
  'not found': () => expect('foo bar bar' |> replace('baz', 'next')).toEqual('foo bar bar'),
  regex: () => expect('foo foo bar' |> replace(/foo/g, 'baz')).toEqual('baz baz bar'),
}
