import { ifElse, map, multiply } from '@dword-design/functions'

export default () => {
  expect([1, 2, 3] |> ifElse(array => array.length === 3, map(multiply(2)), map(multiply(3)))).toEqual([2, 4, 6])
  expect([1, 2, 3] |> ifElse(array => array.length === 2, map(multiply(2)), map(multiply(3)))).toEqual([3, 6, 9])
}
