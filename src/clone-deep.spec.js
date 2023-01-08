import cloneDeep from './clone-deep.js'

export default {
  array: () => {
    const array = [1, 2, 3]

    const array2 = array |> cloneDeep
    array2[1] = 1
    expect(array).toEqual([1, 2, 3])
    expect(array2).toEqual([1, 1, 3])
  },
  number: () => expect(2 |> cloneDeep).toEqual(2),
  object: () => {
    const obj = { bar: 2, foo: 1 }

    const obj2 = obj |> cloneDeep
    obj2.foo = 2
    expect(obj).toEqual({ bar: 2, foo: 1 })
    expect(obj2).toEqual({ bar: 2, foo: 2 })
  },
  string: () => expect('foo' |> cloneDeep).toEqual('foo'),
}
