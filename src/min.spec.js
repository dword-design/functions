import min from './min.js';

export default { valid: () => expect([1, 3, 6, 4] |> min).toEqual(1) };
