import includes from './includes.js';

export default {
  false: () => expect([1, 2, 3] |> includes(4)).toBeFalsy(),
  true: () => expect([1, 2, 3] |> includes(1)).toBeTruthy(),
};
