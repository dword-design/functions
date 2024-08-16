import slice from './slice.js';

export default {
  end: () => expect([1, 2, 3, 4] |> slice(1, 3)).toEqual([2, 3]),
  'no end': () => expect([1, 2, 3, 4] |> slice(2)).toEqual([3, 4]),
};
