import isUndefined from './is-undefined.js'

export default {
  array: () => expect([] |> isUndefined).toBeFalsy(),
  number: () => expect(0 |> isUndefined).toBeFalsy(),
  object: () => expect({} |> isUndefined).toBeFalsy(),
  string: () => expect('' |> isUndefined).toBeFalsy(),
  undefined: () => expect(undefined |> isUndefined).toBeTruthy(),
}
