import { jsonToString, endent } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect([1, 2] |> jsonToString()).toEqual('[1,2]')
  expect({ foo: 1, bar: 2 } |> jsonToString()).toEqual('{"foo":1,"bar":2}')
  expect({ foo: 1, bar: 2 } |> jsonToString({ indent: 2 })).toEqual(endent`
    {
      "foo": 1,
      "bar": 2
    }
  `)
}
