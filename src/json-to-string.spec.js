import endent from './endent.js'
import jsonToString from './json-to-string.js'

export default {
  array: () => expect([1, 2] |> jsonToString()).toEqual('[1,2]'),
  indented: () =>
    expect({ bar: 2, foo: 1 } |> jsonToString({ indent: 2 })).toEqual(endent`
      {
        "bar": 2,
        "foo": 1
      }
    `),
  object: () =>
    expect({ bar: 2, foo: 1 } |> jsonToString()).toEqual('{"bar":2,"foo":1}'),
}
