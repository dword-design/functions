import self from './max-by.js';

export default {
  empty: () => expect([] |> self('foo')).toEqual(undefined),
  valid: () =>
    expect([{ foo: 1 }, { foo: 6 }, { foo: 2 }] |> self('foo')).toEqual({ foo: 6 }),
};
