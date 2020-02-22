import includes from './includes'

export default {
  true: () => expect([1, 2, 3] |> includes(1)).toBeTruthy(),
  false: () => expect([1, 2, 3] |> includes(4)).toBeFalsy(),
}
