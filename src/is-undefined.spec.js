import isUndefined from './is-undefined'

export default {
  undefined: () => expect(undefined |> isUndefined).toBeTruthy(),
  array: () => expect([] |> isUndefined).toBeFalsy(),
  object: () => expect({} |> isUndefined).toBeFalsy(),
  string: () => expect('' |> isUndefined).toBeFalsy(),
  number: () => expect(0 |> isUndefined).toBeFalsy(),
}
