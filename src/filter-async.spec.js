import filterAsync from './filter-async.js';

export default {
  valid: async () =>
    expect(
      [1, 2, 3] |> filterAsync(value => Promise.resolve(value !== 2)) |> await,
    ).toEqual([1, 3]),
};
