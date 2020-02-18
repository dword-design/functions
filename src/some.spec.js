import some from './some'

export default {
  'array true': () => expect([1, 2, 3] |> some(x => x >= 2)).toBeTruthy(),
  'array false': () => expect([1, 2, 3] |> some(x => x >= 4)).toBeFalsy(),
  'object true': () => expect({ x: 1, y: 2, z: 3 } |> some(x => x >= 2)).toBeTruthy(),
  'object false': () => expect({ x: 1, y: 2, z: 3 } |> some(x => x >= 4)).toBeFalsy(),
}
