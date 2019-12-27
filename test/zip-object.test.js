import { zipObject } from '@dword-design/functions'
import expect from 'expect'

export default () => expect(zipObject(['foo', 'bar'], [1, 2])).toEqual({ foo: 1, bar: 2 })
