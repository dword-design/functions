import sum from './sum.js';

export default { valid: () => expect([1, 2, 3] |> sum).toEqual(6) };
