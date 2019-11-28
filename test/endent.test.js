import { endent } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(endent`
  foo
    bar
    baz
`).toEqual('foo\n  bar\n  baz')
