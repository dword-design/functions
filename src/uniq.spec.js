import uniq from './uniq.js';

export default {
  valid: () => expect([1, 2, 3, 1, 3, 4] |> uniq).toEqual([1, 2, 3, 4]),
};
