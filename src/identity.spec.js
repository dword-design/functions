import identity from './identity'

export default {
  number: () => {
    expect(identity(1)).toEqual(1)
    expect(identity(2)).toEqual(2)
  },
  string: () => {
    const str = 'foo'
    expect(identity(str)).toBe(str)
  },
  undefined: () => expect(identity(undefined)).toEqual(undefined),
  array: () => {
    const array = [1, 2]
    expect(identity(array)).toBe(array)
  },
  object: () => {
    const obj = { foo: 1, bar: 2 }
    expect(identity(obj)).toBe(obj)
  },
}
