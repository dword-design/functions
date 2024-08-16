import stubArray from './stub-array.js';

export default { valid: () => expect(stubArray()).toEqual([]) };
