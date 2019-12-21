import { merge } from '@dword-design/functions'
import expect from 'expect'

export default () => {
  expect({ foo: 1 } |> merge({ bar: 2 })).toEqual({ foo: 1, bar: 2 })
  expect({ foo: 1 } |> merge({ foo: 2 })).toEqual({ foo: 2 })
  expect({ foo: 1 } |> merge({ foo: 2 }, { bar: 3 })).toEqual({ foo: 2, bar: 3 })
  expect({ foo: 1 } |> merge([{ bar: 2 }, { baz: 3 }])).toEqual({ foo: 1, 0: { bar: 2 }, 1: { baz: 3 } })
  expect({ foo: { bar: 2 } } |> merge({ foo: { baz: 3 } })).toEqual({ foo: { bar: 2, baz: 3 } })
}
