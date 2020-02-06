import { replace } from '@dword-design/functions'

export default () => {
  expect('foo foo bar' |> replace('foo', 'baz')).toEqual('baz foo bar')
  expect('foo foo bar' |> replace(/foo/g, 'baz')).toEqual('baz baz bar')
  expect('foo bar bar' |> replace('baz', 'next')).toEqual('foo bar bar')
}
