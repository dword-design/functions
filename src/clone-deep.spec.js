import cloneDeep from './clone-deep'

export default {
  array: () => {
    const array = [1, 2, 3]
    const array2 = array |> cloneDeep
    array2[1] = 1
    expect(array).toEqual([1, 2, 3])
    expect(array2).toEqual([1, 1, 3])
  },
  object: () => {
    const obj = { foo: 1, bar: 2 }
    const obj2 = obj |> cloneDeep
    obj2.foo = 2
    expect(obj).toEqual({ foo: 1, bar: 2 })
    expect(obj2).toEqual({ foo: 2, bar: 2 })
  },
  number: () => expect(2 |> cloneDeep).toEqual(2),
  string: () => expect('foo' |> cloneDeep).toEqual('foo'),
}
