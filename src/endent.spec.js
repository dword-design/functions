import endent from './endent.js';

export default {
  'empty first line': () =>
    expect(
      endent`

        foo
          bar
          baz
      `,
    ).toEqual('\nfoo\n  bar\n  baz'),

  'empty last line': () =>
    expect(
      endent`
        foo
          bar
          baz

      `,
    ).toEqual('foo\n  bar\n  baz\n'),

  'first endent greater': () =>
    expect(
      endent`
          foo
        bar
        baz
      `,
    ).toEqual('  foo\nbar\nbaz'),

  tab: () => expect(endent`foo\tbar`).toEqual('foo\tbar'),

  valid: () =>
    expect(
      endent`
        foo
          bar
          baz
      `,
    ).toEqual('foo\n  bar\n  baz'),
};
