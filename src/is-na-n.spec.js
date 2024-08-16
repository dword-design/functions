import isNaN from './is-na-n.js';

export default {
  nan: () => expect(NaN |> isNaN).toBeTruthy(),
  number: () => expect(1 |> isNaN).toBeFalsy(),
  undefined: () => expect(undefined |> isNaN).toBeFalsy(),
};
