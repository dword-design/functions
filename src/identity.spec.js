import identity from './identity'

export default {
  array: () => {
    const array = [1, 2]
    expect(identity(array)).toBe(array)
  },
  number: () => {
    expect(identity(1)).toEqual(1)
    expect(identity(2)).toEqual(2)
  },
  object: () => {
    const obj = { bar: 2, foo: 1 }
    expect(identity(obj)).toBe(obj)
  },
  string: () => {
    const str = 'foo'
    expect(identity(str)).toBe(str)
  },
  undefined: () => expect(identity(undefined)).toEqual(undefined),
}
