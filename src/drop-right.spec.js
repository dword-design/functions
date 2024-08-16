import dropRight from './drop-right.js';

export default {
  empty: () => expect([1, 2, 3] |> dropRight()).toEqual([1, 2]),
  param: () => expect([1, 2, 3] |> dropRight(2)).toEqual([1]),
};
