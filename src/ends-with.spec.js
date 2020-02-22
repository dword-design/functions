import endsWith from './ends-with'

export default {
  true: () => expect('foobarbaz' |> endsWith('baz')).toBeTruthy(),
  false: () => expect('foobarbar' |> endsWith('baz')).toBeFalsy(),
}
