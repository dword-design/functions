import self from './max-by.js'

export default {
  valid: () => expect([{ foo: 1 }, { foo: 6 }] |> self('foo')).toEqual({ foo: 6 }),
  empty: () => expect([] |> self('foo')).toEqual(undefined),
}
