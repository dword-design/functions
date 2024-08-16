import startsWith from './starts-with.js';

export default {
  false: () => expect('barbazfoo' |> startsWith('foo')).toBeFalsy(),
  true: () => expect('foobarbaz' |> startsWith('foo')).toBeTruthy(),
};
