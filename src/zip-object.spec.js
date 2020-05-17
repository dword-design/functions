import zipObject from './zip-object'

export default {
  valid: () =>
    expect(zipObject(['foo', 'bar'], [1, 2])).toEqual({ foo: 1, bar: 2 }),
}
