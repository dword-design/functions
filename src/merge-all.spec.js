import mergeAll from './merge-all.js';

export default {
  array: () =>
    expect(mergeAll([{ foo: 1 }, { bar: 2 }])).toEqual({ bar: 2, foo: 1 }),
  object: () => expect(mergeAll({ foo: 1 }, { bar: 2 })).toEqual({ bar: 2 }),
};
