import { mergeAll } from '@dword-design/functions'

export default () => {
  expect(mergeAll([{ foo: 1 }, { bar: 2 }])).toEqual({ foo: 1, bar: 2 })
  expect(mergeAll({ foo: 1 }, { bar: 2 })).toEqual({ bar: 2 })
}
