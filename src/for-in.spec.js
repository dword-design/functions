import selfIn from './for-in'

export default {
  'array key': () => {
    let result = ''
    selfIn([1, 2, 3], (value, key) => {
      result += key
    })
    expect(result).toEqual('012')
  },
  'array value': () => {
    let result = ''
    selfIn([1, 2, 3], value => {
      result += value
    })
    expect(result).toEqual('123')
  },
  'object key': () => {
    let result = ''
    selfIn({ bar: 2, baz: 3, foo: 1 }, (value, key) => {
      result += key
    })
    expect(result).toEqual('barbazfoo')
  },
  'object value': () => {
    let result = ''
    selfIn({ bar: 2, baz: 3, foo: 1 }, value => {
      result += value
    })
    expect(result).toEqual('231')
  },
}
