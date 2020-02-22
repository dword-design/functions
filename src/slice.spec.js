import slice from './slice'

export default {
  'no end': () => expect([1, 2, 3, 4] |> slice(2)).toEqual([3, 4]),
  end: () => expect([1, 2, 3, 4] |> slice(1, 3)).toEqual([2, 3]),
}
