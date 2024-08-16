import divide from './divide.js';

export default { valid: () => expect(4 |> divide(2)).toEqual(2) };
