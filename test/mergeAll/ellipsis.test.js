import { mergeAll } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(mergeAll({ foo: 1 }, { bar: 2 })).toEqual({ bar: 2 })
