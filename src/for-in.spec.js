import forIn from './for-in'

export default {
  'array key': () => {
    let result = ''
    forIn((value, key) => {
      result += key
    })([1, 2, 3])
    expect(result).toEqual('012')
  },
  'array value': () => {
    let result = ''
    forIn(value => {
      result += value
    })([1, 2, 3])
    expect(result).toEqual('123')
  },
  'object key': () => {
    let result = ''
    forIn((value, key) => {
      result += key
    })({ bar: 2, baz: 3, foo: 1 })
    expect(result).toEqual('foobarbaz')
  },
  'object value': () => {
    let result = ''
    forIn(value => {
      result += value
    })({ bar: 2, baz: 3, foo: 1 })
    expect(result).toEqual('123')
  },
}
