import self from './reverse'

export default {
  works: () => {
    const array = [1, 2, 3]
    expect(array |> self).toEqual([3, 2, 1])
    expect(array).toEqual([1, 2, 3])
  },
}
