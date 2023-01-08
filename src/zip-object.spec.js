import zipObject from './zip-object.js'

export default {
  valid: () =>
    expect(zipObject(['foo', 'bar'], [1, 2])).toEqual({ bar: 2, foo: 1 }),
}
