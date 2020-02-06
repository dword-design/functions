import { endent } from '@dword-design/functions'

export default () => {
  expect(endent`
    foo
      bar
      baz
  `).toEqual('foo\n  bar\n  baz')

  expect(endent`

    foo
      bar
      baz
  `).toEqual('\nfoo\n  bar\n  baz')

  expect(endent`
    foo
      bar
      baz

  `).toEqual('foo\n  bar\n  baz\n')

  expect(endent`
      foo
    bar
    baz
  `).toEqual('  foo\nbar\nbaz')

  expect(endent`foo\tbar`).toEqual('foo\tbar')
}
