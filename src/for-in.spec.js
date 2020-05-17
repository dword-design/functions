import forIn from './for-in'

export default {
  'array value': () => {
    let result = ''
    forIn(value => {
      result += value
    })([1, 2, 3])
    expect(result).toEqual('123')
  },
  'array key': () => {
    let result = ''
    forIn((value, key) => {
      result += key
    })([1, 2, 3])
    expect(result).toEqual('012')
  },
  'object value': () => {
    let result = ''
    forIn(value => {
      result += value
    })({ foo: 1, bar: 2, baz: 3 })
    expect(result).toEqual('123')
  },
  'object key': () => {
    let result = ''
    forIn((value, key) => {
      result += key
    })({ foo: 1, bar: 2, baz: 3 })
    expect(result).toEqual('foobarbaz')
  },
}
