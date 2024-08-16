import stubString from './stub-string.js';

export default { valid: () => expect(stubString()).toEqual('') };
