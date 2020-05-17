import find from './find'

const array = [
  { foo: 1, bar: 2 },
  { foo: 2, bar: 3 },
]

export default {
  function: () => expect(array |> find(({ foo }) => foo === 1)).toBe(array[0]),
  property: () => expect(array |> find({ foo: 1 })).toBe(array[0]),
  false: () => expect(array |> find({ baz: 1 })).toBeUndefined(),
}
