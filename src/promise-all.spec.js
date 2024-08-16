import promiseAll from './promise-all.js';

export default {
  valid: async () =>
    expect(
      await ([Promise.resolve(2), Promise.resolve(3)] |> promiseAll),
    ).toEqual([2, 3]),
};
