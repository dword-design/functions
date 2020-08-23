import startsWith from './starts-with'

export default {
  false: () => expect('barbazfoo' |> startsWith('foo')).toBeFalsy(),
  true: () => expect('foobarbaz' |> startsWith('foo')).toBeTruthy(),
}
