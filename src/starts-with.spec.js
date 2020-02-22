import startsWith from './starts-with'

export default {
  true: () => expect('foobarbaz' |> startsWith('foo')).toBeTruthy(),
  false: () => expect('barbazfoo' |> startsWith('foo')).toBeFalsy(),
}
