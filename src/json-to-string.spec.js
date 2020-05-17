import jsonToString from './json-to-string'
import endent from './endent'

export default {
  array: () => expect([1, 2] |> jsonToString()).toEqual('[1,2]'),
  object: () =>
    expect({ foo: 1, bar: 2 } |> jsonToString()).toEqual('{"foo":1,"bar":2}'),
  indented: () =>
    expect({ foo: 1, bar: 2 } |> jsonToString({ indent: 2 })).toEqual(endent`
      {
        "foo": 1,
        "bar": 2
      }
    `),
}
