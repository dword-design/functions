import some from './some.js';

export default {
  'array false': () => expect([1, 2, 3] |> some(x => x >= 4)).toBeFalsy(),
  'array true': () => expect([1, 2, 3] |> some(x => x >= 2)).toBeTruthy(),
  'object false': () =>
    expect({ x: 1, y: 2, z: 3 } |> some(x => x >= 4)).toBeFalsy(),
  'object true': () =>
    expect({ x: 1, y: 2, z: 3 } |> some(x => x >= 2)).toBeTruthy(),
};
