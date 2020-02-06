import { zipObject } from '@dword-design/functions'

export default () => expect(zipObject(['foo', 'bar'], [1, 2])).toEqual({ foo: 1, bar: 2 })
