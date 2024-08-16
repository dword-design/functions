import last from './last.js';

export default {
  empty: () => expect([] |> last).toBeUndefined(),
  'non-empty': () => expect([1, 3, 6, 2] |> last).toEqual(2),
};
