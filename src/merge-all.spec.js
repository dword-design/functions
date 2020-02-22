import mergeAll from './merge-all'

export default {
  array: () => expect(mergeAll([{ foo: 1 }, { bar: 2 }])).toEqual({ foo: 1, bar: 2 }),
  object: () => expect(mergeAll({ foo: 1 }, { bar: 2 })).toEqual({ bar: 2 }),
}
