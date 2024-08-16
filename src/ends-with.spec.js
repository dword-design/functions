import endsWith from './ends-with.js';

export default {
  false: () => expect('foobarbar' |> endsWith('baz')).toBeFalsy(),
  true: () => expect('foobarbaz' |> endsWith('baz')).toBeTruthy(),
};
