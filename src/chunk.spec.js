import chunk from './chunk.js';

export default {
  valid: () =>
    expect([1, 2, 3, 4, 5] |> chunk(2)).toEqual([[1, 2], [3, 4], [5]]),
};
