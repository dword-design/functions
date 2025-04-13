import self from './minBy.js';

export default { valid: () => expect([{ value: 2 }, { value: 1 }, { value: 3 }] |> self('value')).toEqual({ value: 1 }) };
