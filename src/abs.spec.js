import abs from './abs.js';

export default {
  valid: () => {
    expect(3 |> abs).toEqual(3);
    expect(0 |> abs).toEqual(0);
    expect(-3 |> abs).toEqual(3);
  },
};
