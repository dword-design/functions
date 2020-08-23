import find from './find'

const array = [
  { bar: 2, foo: 1 },
  { bar: 3, foo: 2 },
]

export default {
  false: () => expect(array |> find({ baz: 1 })).toBeUndefined(),
  function: () =>
    expect(array |> find(element => element.foo === 1)).toBe(array[0]),
  property: () => expect(array |> find({ foo: 1 })).toBe(array[0]),
}
